import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { existsSync, unlinkSync } from 'fs'
import * as jwt from 'jsonwebtoken'
import path from 'path'
import { Op } from 'sequelize'
import { sequelize } from '../database/db'
import { logger } from '../logger/logger'
import {
    Category,
    Item,
    ItemImage,
    ItemInvoice,
    ItemLocation,
    Location,
    PriceList,
    Product,
    ProductImage,
    ProductLocation,
    Role,
    User,
    UserSession,
} from '../models/models'
import { decryptPayload, encryptPayload, saveFile } from '../utils/utils'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

@Controller('inventory')
export class InventoryController {
    // Common function to check admin role
    private async checkAdminRole(token: string): Promise<void> {
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            throw new Error('Invalid or expired token.')
        }
        const session = await UserSession.findOne({
            where: {
                token,
                isExpired: false,
            },
        })
        if (!session) {
            throw new Error('Session not found or expired.')
        }
        if (new Date() > session.expiry) {
            await session.update({ isExpired: true })
            throw new Error('Session expired.')
        }
        const userId = session.toJSON().userId
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                },
            ],
        })
        if (!user) {
            throw new Error('User not found.')
        }
        const roles = user.toJSON().roles || []
        const isAdmin = roles.some((role: any) => role.id === 1)
        if (!isAdmin) {
            throw new Error('Access denied. Admin role required.')
        }
    }

    @Post('filters')
    async getInventoryFilters(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const categoryIds = Array.isArray(decryptedBody?.categoryIds)
                ? decryptedBody.categoryIds
                : []
            const itemIds = Array.isArray(decryptedBody?.itemIds)
                ? decryptedBody.itemIds
                : []
            const locationIds = Array.isArray(decryptedBody?.locationIds)
                ? decryptedBody.locationIds
                : []

            // Execute three separate SELECT statements with JSON array params; fallback to simple selects if not present
            const replacements = {
                categoryIds: categoryIds.length
                    ? JSON.stringify(categoryIds)
                    : null,
                itemIds: itemIds.length ? JSON.stringify(itemIds) : null,
                locationIds: locationIds.length
                    ? JSON.stringify(locationIds)
                    : null,
            }

            const sql1 = `
                SELECT id, category AS name
                FROM categories c
            `
            const result1: any = await sequelize.query(sql1, { replacements })

            const sql2 = `
                SELECT id, name
                FROM (
                  SELECT id, name, 'item' as type, categoryId AS category
                  FROM items i
                  WHERE (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(i.id AS JSON)))
                    AND (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(i.categoryId AS JSON)))
                  UNION ALL
                  SELECT id, name, 'product' as type, categoryid AS category
                  FROM products p
                  WHERE (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(p.categoryid AS JSON)))
                ) AS combined
                ORDER BY name ASC;
            `
            const result2: any = await sequelize.query(sql2, { replacements })

            const sql3 = `
                SELECT id, name
                FROM locations l
                ORDER BY name ASC;
            `
            const result3: any = await sequelize.query(sql3, { replacements })
            // Handle three separate result sets
            const categories = result1[0] || []
            const items = result2[0] || []
            const locations = result3[0] || []
            return {
                response: encryptPayload({
                    categories,
                    items,
                    locations,
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getInventoryFilters: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            return {
                error: encryptPayload({
                    error: 'Failed to fetch inventory filters',
                }),
            }
        }
    }

    @Post('kpis')
    async getInventoryKPIs(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const categoryIds = Array.isArray(decryptedBody?.categoryIds)
                ? decryptedBody.categoryIds
                : []
            const itemIds = Array.isArray(decryptedBody?.itemIds)
                ? decryptedBody.itemIds
                : []
            const locationIds = Array.isArray(decryptedBody?.locationIds)
                ? decryptedBody.locationIds
                : []

            // Call stored procedure that returns a single row with KPI columns; pass JSON arrays (or null)
            const fromDate = decryptedBody?.fromDate || null
            const toDate = decryptedBody?.toDate || null
            const results: any = await sequelize.query(
                'CALL getInventoryKPIs(:categoryIds, :itemIds, :locationIds, :fromDate, :toDate)',
                {
                    replacements: {
                        categoryIds: categoryIds.length
                            ? JSON.stringify(categoryIds)
                            : null,
                        itemIds: itemIds.length
                            ? JSON.stringify(itemIds)
                            : null,
                        locationIds: locationIds.length
                            ? JSON.stringify(locationIds)
                            : null,
                        fromDate,
                        toDate,
                    },
                },
            )

            // MySQL CALL returns either an array (first element is rows) or rows directly
            let row = null
            if (Array.isArray(results) && results.length > 0) {
                row = results[0]
            } else if (results && typeof results === 'object') {
                row = results
            }

            // If stored procedure not available (row == null), compute directly
            if (!row) {
                // total items = items + products
                // total items respecting date filters (item invoices / pricelists)
                const [totalItemsRows]: any = await sequelize.query(
                    `SELECT
                      (SELECT COUNT(DISTINCT i.id)
                       FROM items i
                       WHERE (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(i.id AS JSON)))
                         AND (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(i.categoryId AS JSON)))
                         AND (:fromDate IS NULL OR EXISTS (SELECT 1 FROM iteminvoices ii WHERE ii.itemId = i.id AND ii.updatedAt >= :fromDate AND (:toDate IS NULL OR ii.updatedAt <= :toDate)))
                      )
                      +
                      (SELECT COUNT(DISTINCT p.id)
                       FROM products p
                       WHERE (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(p.id AS JSON)))
                         AND (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(p.categoryid AS JSON)))
                         AND (:fromDate IS NULL OR EXISTS (SELECT 1 FROM pricelists pr WHERE pr.productId = p.id AND pr.updatedAt >= :fromDate AND (:toDate IS NULL OR pr.updatedAt <= :toDate)))
                      ) AS totalItems`,
                    {
                        replacements: {
                            categoryIds: categoryIds.length
                                ? JSON.stringify(categoryIds)
                                : null,
                            itemIds: itemIds.length
                                ? JSON.stringify(itemIds)
                                : null,
                            fromDate,
                            toDate,
                        },
                    },
                )
                const totalItems = Number(totalItemsRows?.[0]?.totalItems || 0)

                const totalCategories = await Category.count({
                    where: categoryIds.length
                        ? { id: { [Op.in]: categoryIds } }
                        : undefined,
                })

                const [itemRows]: any = await sequelize.query(
                    `SELECT COALESCE(SUM(il.quantity),0) as itemStock
                     FROM itemlocations il
                     JOIN items i ON i.id = il.itemId
                     WHERE (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(i.categoryId AS JSON)))
                       AND (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(i.id AS JSON)))
                       AND (:locationIds IS NULL OR JSON_LENGTH(:locationIds) = 0 OR JSON_CONTAINS(:locationIds, CAST(il.locationId AS JSON)))
                       AND (:fromDate IS NULL OR EXISTS (SELECT 1 FROM iteminvoices ii WHERE ii.itemId = i.id AND ii.updatedAt >= :fromDate AND (:toDate IS NULL OR ii.updatedAt <= :toDate))))`,
                    {
                        replacements: {
                            categoryIds: categoryIds.length
                                ? JSON.stringify(categoryIds)
                                : null,
                            itemIds: itemIds.length
                                ? JSON.stringify(itemIds)
                                : null,
                            locationIds: locationIds.length
                                ? JSON.stringify(locationIds)
                                : null,
                            fromDate,
                            toDate,
                        },
                    },
                )
                const [productRows]: any = await sequelize.query(
                    `SELECT COALESCE(SUM(pl.quantity),0) as productStock
                     FROM productlocations pl
                     JOIN products p ON p.id = pl.productId
                     WHERE (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(p.categoryid AS JSON)))
                       AND (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(p.id AS JSON)))
                       AND (:locationIds IS NULL OR JSON_LENGTH(:locationIds) = 0 OR JSON_CONTAINS(:locationIds, CAST(pl.locationId AS JSON)))`,
                    {
                        replacements: {
                            categoryIds: categoryIds.length
                                ? JSON.stringify(categoryIds)
                                : null,
                            itemIds: itemIds.length
                                ? JSON.stringify(itemIds)
                                : null,
                            locationIds: locationIds.length
                                ? JSON.stringify(locationIds)
                                : null,
                        },
                    },
                )
                const itemStock = itemRows?.itemStock || 0
                const productStock = productRows?.productStock || 0

                // pending/fulfilled for products from cartproducts -> carts -> orders
                const [prodPendingFulfilled]: any = await sequelize.query(
                    `SELECT COALESCE(SUM(CASE WHEN o.status = 'Delivered' THEN cp.quantity ELSE 0 END),0) AS fulfilled,
                            COALESCE(SUM(CASE WHEN o.status IS NULL OR o.status <> 'Delivered' THEN cp.quantity ELSE 0 END),0) AS pending
                     FROM cartproducts cp
                     JOIN carts c ON cp.cartId = c.id
                     LEFT JOIN orders o ON o.cartId = c.id
                     JOIN products p ON p.id = cp.productId
                     WHERE (:categoryIds IS NULL OR JSON_LENGTH(:categoryIds) = 0 OR JSON_CONTAINS(:categoryIds, CAST(p.categoryid AS JSON)))
                       AND (:itemIds IS NULL OR JSON_LENGTH(:itemIds) = 0 OR JSON_CONTAINS(:itemIds, CAST(p.id AS JSON)))
                       AND (:fromDate IS NULL OR EXISTS (SELECT 1 FROM pricelists pr2 WHERE pr2.productId = p.id AND pr2.updatedAt >= :fromDate AND (:toDate IS NULL OR pr2.updatedAt <= :toDate))))`,
                    {
                        replacements: {
                            categoryIds: categoryIds.length
                                ? JSON.stringify(categoryIds)
                                : null,
                            itemIds: itemIds.length
                                ? JSON.stringify(itemIds)
                                : null,
                            fromDate,
                            toDate,
                        },
                    },
                )

                row = {
                    totalItems,
                    totalCategories,
                    availableStock:
                        Number(itemStock || 0) + Number(productStock || 0),
                    pendingQuantity: Number(prodPendingFulfilled?.pending || 0),
                    fulfilledQuantity: Number(
                        prodPendingFulfilled?.fulfilled || 0,
                    ),
                }
            }

            return { response: encryptPayload(row) }
        } catch (error) {
            const cleanMessage =
                'Error in getInventoryKPIs: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            return {
                error: encryptPayload({
                    error: 'Failed to fetch inventory KPIs',
                }),
            }
        }
    }

    @Post('chart-data')
    async getInventoryChartData(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const categoryIds = Array.isArray(decryptedBody?.categoryIds)
                ? decryptedBody.categoryIds
                : []
            const itemIds = Array.isArray(decryptedBody?.itemIds)
                ? decryptedBody.itemIds
                : []
            const locationIds = Array.isArray(decryptedBody?.locationIds)
                ? decryptedBody.locationIds
                : []

            const fromDate = decryptedBody?.fromDate || null
            const toDate = decryptedBody?.toDate || null
            const types = ['byCategory', 'byLocation', 'byItem', 'topItems']
            const chartData: any = {}

            for (const type of types) {
                const results: any = await sequelize.query(
                    'CALL getInventoryChartData(:type, :categoryIds, :itemIds, :locationIds, :fromDate, :toDate)',
                    {
                        replacements: {
                            type,
                            categoryIds: categoryIds.length
                                ? JSON.stringify(categoryIds)
                                : null,
                            itemIds: itemIds.length
                                ? JSON.stringify(itemIds)
                                : null,
                            locationIds: locationIds.length
                                ? JSON.stringify(locationIds)
                                : null,
                            fromDate,
                            toDate,
                        },
                    },
                )

                // For CALL, results may be an array of rows; normalize
                if (Array.isArray(results) && results.length > 0) {
                    chartData[type] = results
                } else {
                    chartData[type] = []
                }
            }

            return { response: encryptPayload(chartData) }
        } catch (error) {
            const cleanMessage =
                'Error in getInventoryChartData: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            return {
                error: encryptPayload({
                    error: 'Failed to fetch inventory chart data',
                }),
            }
        }
    }

    @Post('get-categories')
    async getCategories(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const whereClause: any = {}
            if (decryptedBody?.type) whereClause.type = decryptedBody.type
            if (
                decryptedBody?.category &&
                decryptedBody?.category !== 'All Products' &&
                Boolean(decryptedBody?.category) === true
            ) {
                // match exact category name
                whereClause.category = decryptedBody.category
            }
            if (decryptedBody?.description) {
                whereClause.description = {
                    [Op.like]: `%${decryptedBody.description}%`,
                }
            }
            if (
                decryptedBody?.image !== undefined &&
                decryptedBody?.image !== null
            ) {
                if (decryptedBody.image === true)
                    whereClause.image = { [Op.ne]: null }
                else if (decryptedBody.image === false) whereClause.image = null
            }

            const categories = await Category.findAll({
                where: whereClause,
                order: [['rank', 'ASC']],
            })
            return { response: encryptPayload(categories) }
        } catch (error) {
            const cleanMessage =
                'Error in getCategories: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            return {
                error: encryptPayload({ error: 'Failed to fetch categories' }),
            }
        }
    }

    @Post('save-category')
    @UseInterceptors(FileInterceptor('file'))
    async createOrUpdateCategory(
        @Body() body: any,
        @UploadedFile() file: Express.Multer.File,
    ) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, category, rank, image, description, token, type } =
                decryptedBody as {
                    id?: number
                    category: string
                    rank?: number
                    image?: string
                    type?: string
                    description?: string
                    token: string
                }
            if (!category || !token || !rank || !type) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Category name,rank,type and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            let imagePath = image || null
            if (file) {
                imagePath = saveFile(file, 'category')
            }
            let cat
            if (id) {
                cat = await Category.findByPk(id)
                if (!cat) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Category not found',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                const updateData: any = { category, rank, description, type }
                if (imagePath !== undefined) {
                    updateData.image = imagePath
                }
                await cat.update(updateData)
            } else {
                cat = await Category.create({
                    category,
                    rank,
                    image: imagePath || null,
                    description,
                    type,
                })
            }
            return { response: encryptPayload(cat) }
        } catch (error) {
            const cleanMessage =
                'Error in createOrUpdateCategory: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to create or update category. ' +
                            errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('delete-category')
    async deleteCategory(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody as {
                id: number
                token: string
            }
            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Category id and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Find category
            const category = await Category.findByPk(id)
            if (!category) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: 'Category not found' }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check if any products are mapped to this category
            const productsCount = await Product.count({
                where: { categoryid: id },
            })
            // Check if any items are mapped to this category
            const itemCount = await Item.count({
                where: { categoryid: id },
            })
            if (productsCount > 0 || itemCount > 0) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Cannot delete category as it is mapped to products or items',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Delete category image if exists
            if (category.toJSON().image) {
                try {
                    // Assuming deleteFileIfExists can handle inventory path, or adjust path
                    const imagePath = category.toJSON().image
                    const fullPath = path.join(
                        process.env.INVENTORY_PATH || '',
                        imagePath,
                    )
                    if (existsSync(fullPath)) {
                        unlinkSync(fullPath)
                    }
                } catch (err) {
                    logger.error(
                        new Error(
                            `Failed to delete category image: ${err.message}`,
                        ),
                    )
                }
            }

            // Delete category
            await category.destroy()

            return {
                response: encryptPayload({
                    message: 'Category deleted successfully',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in deleteCategory: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to delete category. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('locations')
    async getLocations(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const {
                name,
                floor,
                room,
                rack,
                address,
                city,
                state,
                country,
                photo,
            } = decryptedBody as {
                name?: string
                floor?: string
                room?: string
                rack?: string
                address?: string
                city?: string
                state?: string
                country?: string
                photo?: boolean
            }

            const whereClause: any = {}
            if (name) whereClause.name = { [Op.like]: `%${name}%` }
            if (floor) whereClause.floor = { [Op.like]: `%${floor}%` }
            if (room) whereClause.room = { [Op.like]: `%${room}%` }
            if (rack) whereClause.rack = { [Op.like]: `%${rack}%` }
            if (city) whereClause.city = { [Op.like]: `%${city}%` }
            if (state) whereClause.state = { [Op.like]: `%${state}%` }
            if (country) whereClause.country = { [Op.like]: `%${country}%` }
            if (photo !== undefined && photo !== null) {
                if (photo) {
                    whereClause.photo = { [Op.ne]: null }
                } else {
                    whereClause.photo = { [Op.is]: null }
                }
            }

            const locations = await Location.findAll({
                where: whereClause,
                order: [['id', 'ASC']],
            })

            return { response: encryptPayload(locations) }
        } catch (error) {
            const cleanMessage =
                'Error in getLocations: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch locations. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-location')
    @UseInterceptors(FileInterceptor('file'))
    async createOrUpdateLocation(
        @Body() body: any,
        @UploadedFile() file: Express.Multer.File,
    ) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const {
                id,
                name,
                floor,
                room,
                rack,
                addressLine1,
                city,
                state,
                country,
                photo,
                token,
            } = decryptedBody as {
                id?: number
                name: string
                floor: string
                room: string
                rack: string
                addressLine1: string
                city: string
                state: string
                country: string
                photo?: string
                token: string
            }
            if (
                !name ||
                !floor ||
                !room ||
                !rack ||
                !city ||
                !state ||
                !country ||
                !token
            ) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Name, floor, room, rack, city, state, country and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            let photoPath = photo || null
            if (file) {
                photoPath = saveFile(file, 'location')
            }
            let loc
            if (id) {
                loc = await Location.findByPk(id)
                if (!loc) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Location not found',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                const updateData: any = {
                    name,
                    floor,
                    room,
                    rack,
                    addressLine1,
                    city,
                    state,
                    country,
                }
                if (photoPath !== undefined) {
                    updateData.photo = photoPath
                }
                await loc.update(updateData)
            } else {
                loc = await Location.create({
                    name,
                    floor,
                    addressLine1,
                    room,
                    rack,
                    city,
                    state,
                    country,
                    photo: photoPath || null,
                })
            }
            return { response: encryptPayload(loc) }
        } catch (error) {
            const cleanMessage =
                'Error in createOrUpdateLocation: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to create or update location. ' +
                            errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('delete-location')
    async deleteLocation(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody as {
                id: number
                token: string
            }
            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Location id and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Find location
            const location = await Location.findByPk(id)
            // Check if any products are mapped to this category
            const productLocationCount = await ProductLocation.count({
                where: { locationid: id },
            })
            // Check if any items are mapped to this category
            const itemLocationCount = await ItemLocation.count({
                where: { locationid: id },
            })
            if (productLocationCount > 0 || itemLocationCount > 0) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Cannot delete location as it is mapped to products or items',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }
            if (!location) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: 'Location not found' }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Delete location photo if exists
            if (location.toJSON().photo) {
                try {
                    // Assuming deleteFileIfExists can handle inventory path, or adjust path
                    const photoPath = location.toJSON().photo
                    const fullPath = path.join(
                        process.env.INVENTORY_PATH || '',
                        photoPath,
                    )
                    if (existsSync(fullPath)) {
                        unlinkSync(fullPath)
                    }
                } catch (err) {
                    logger.error(
                        new Error(
                            `Failed to delete location photo: ${err.message}`,
                        ),
                    )
                }
            }

            // Delete location
            await location.destroy()

            return {
                response: encryptPayload({
                    message: 'Location deleted successfully',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in deleteLocation: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to delete location. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('get-products')
    async getProducts(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request) as {
                category: string
                isAdmin?: boolean
                name?: string
                description?: string
                image?: boolean | null
            }
            const whereClause: any = {}
            if (decryptedBody?.name) {
                whereClause.name = { [Op.like]: `%${decryptedBody.name}%` }
            }
            if (decryptedBody?.description) {
                whereClause.tagline = {
                    [Op.like]: `%${decryptedBody.description}%`,
                }
            }
            if (
                decryptedBody?.category &&
                decryptedBody?.category !== 'All Products' &&
                Boolean(decryptedBody?.category) === true
            ) {
                // Find category by name
                const categoryObj = await Category.findOne({
                    where: { category: decryptedBody.category },
                })
                if (categoryObj) {
                    whereClause.categoryid = categoryObj.getDataValue('id')
                } else {
                    return { response: encryptPayload([]) }
                }
            }
            let priceListQuery: any = { model: PriceList }
            if (!decryptedBody?.isAdmin) {
                priceListQuery = {
                    model: PriceList,
                    attributes: { exclude: ['bomCost'] },
                }
            }

            let products = await Product.findAll({
                where: whereClause,
                include: [
                    priceListQuery,
                    { model: Category },
                    {
                        model: Location,
                        through: { attributes: ['quantity'] },
                        as: 'locations',
                    },
                    { model: ProductImage, order: [['rank', 'ASC']] },
                ],
                order: [['rank', 'ASC']],
            })
            // Filter by image presence
            if (decryptedBody?.image === true) {
                // Products with at least one image
                products = products.filter(
                    (product) => product.toJSON().ProductImages?.length > 0,
                )
            } else if (decryptedBody?.image === false) {
                // Products with no images
                products = products.filter(
                    (product) => product.toJSON().ProductImages?.length === 0,
                )
            }

            return { response: encryptPayload(products) }
        } catch (error) {
            const cleanMessage =
                'Error in getProducts: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            return {
                error: encryptPayload({ error: 'Failed to fetch price lists' }),
            }
        }
    }

    @Post('save-product')
    @UseInterceptors(FilesInterceptor('files'))
    async saveProduct(
        @Body() body: any,
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const {
                id,
                name,
                categoryid,
                pricelists,
                productimages,
                tagline,
                rank,
                locations,
                token,
            } = decryptedBody as {
                id?: number
                name: string
                categoryid: number
                pricelists: any[]
                productimages: {
                    image?: string
                    type: string
                    rank: number
                    id?: number
                    existing?: {
                        id: number
                        fileName: string
                        type?: string
                        rank?: number
                    }
                }[]
                tagline?: string
                rank?: number
                locations: { locationId: number; quantity: number }[]
                token: string
            }
            if (!name || !categoryid || !Array.isArray(pricelists) || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid Request. Missing: name,categoryid, pricelists or token',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            let product
            if (id) {
                product = await Product.findByPk(id)
                if (!product) {
                    return { error: 'Product not found' }
                }
                await product.update({ name, categoryid, tagline, rank })
            } else {
                product = await Product.create({
                    name,
                    categoryid,
                    tagline,
                    rank,
                })
            }
            // Delete pricelists not in the request
            const allExistingPriceLists = await PriceList.findAll({
                where: { productid: product.id },
            })
            const providedPriceListIds = pricelists
                .filter((pl) => pl.id)
                .map((pl) => pl.id)
            const priceListsToDelete = allExistingPriceLists.filter(
                (pl) => !providedPriceListIds.includes(pl.toJSON().id),
            )
            for (const pl of priceListsToDelete) {
                await pl.destroy()
            }
            // Handle pricelists
            for (const pl of pricelists) {
                if (pl.id) {
                    const existingPL = await PriceList.findByPk(pl.id)
                    if (existingPL) {
                        await existingPL.update({
                            weight: pl.weight,
                            unitprice: pl.unitprice,
                            basePrice: pl.basePrice,
                            bomCost: pl.bomCost,
                            quantity: pl.quantity,
                        })
                    }
                } else {
                    await PriceList.create({
                        weight: pl.weight,
                        unitprice: pl.unitprice,
                        basePrice: pl.basePrice,
                        bomCost: pl.bomCost,
                        quantity: pl.quantity,
                        productid: product.id,
                    })
                }
            }
            // Handle images
            const allExistingImages = await ProductImage.findAll({
                where: { productId: product.id },
            })
            // Delete images not in the request
            const existingImageIds = productimages
                .map((img) => img?.id)
                .filter((id) => id)
            const imagesToDelete = allExistingImages.filter(
                (img) => !existingImageIds.includes(img.toJSON().id),
            )
            const deletedImageIds = []
            for (const img of imagesToDelete) {
                // Delete file
                const imagePath = img.toJSON().fileName
                const fullPath = path.join(
                    process.env.INVENTORY_PATH || '',
                    imagePath,
                )
                if (existsSync(fullPath)) {
                    // Check if imagePath is not referenced in ProductImage model
                    const existingImage = await ProductImage.findAll({
                        where: { fileName: imagePath },
                    })
                    if (existingImage.length === 1) {
                        unlinkSync(fullPath)
                    }
                }
                deletedImageIds.push(img.toJSON().id)
                // Delete record
                await img.destroy()
            }
            const imagesToAdd: { image: string; type: string; rank: number }[] =
                []
            const newImages = productimages.filter((img) => !img.id)
            const newImageIndex = 0
            // Save uploaded files
            if (files && files.length > 0) {
                for (const file of files) {
                    const savedPath = saveFile(file, 'product')
                    imagesToAdd.push({
                        image: savedPath,
                        type: newImages[newImageIndex].type,
                        rank: newImages[newImageIndex].rank,
                    })
                }
            }

            // Add new images
            for (const img of imagesToAdd) {
                await ProductImage.create({
                    fileName: img.image,
                    productId: product.id,
                    rank: img.rank,
                    type: img.type,
                })
            }

            // Update existing images
            const existingImages = productimages.filter(
                (img) =>
                    img.existing &&
                    img.existing.id &&
                    !deletedImageIds.includes(img.existing.id),
            )
            for (const img of existingImages) {
                await ProductImage.update(
                    { type: img.type, rank: img.rank || img.existing.rank },
                    { where: { id: img.existing.id } },
                )
            }

            // Handle locations
            if (Array.isArray(locations)) {
                // Get existing ProductLocations for the product
                const existingProductLocations = await ProductLocation.findAll({
                    where: { productId: product.id },
                })
                const existingLocationIds = existingProductLocations.map((pl) =>
                    pl.getDataValue('locationId'),
                )

                // Process incoming locations
                for (const loc of locations) {
                    const existingPL = existingProductLocations.find(
                        (pl) =>
                            pl.getDataValue('locationId') === loc.locationId,
                    )
                    if (existingPL) {
                        // Update existing
                        await existingPL.update({ quantity: loc.quantity })
                    } else {
                        // Create new
                        await ProductLocation.create({
                            productId: product.id,
                            locationId: loc.locationId,
                            quantity: loc.quantity,
                        })
                    }
                }

                // Delete removed locations
                const incomingLocationIds = locations.map(
                    (loc) => loc.locationId,
                )
                const toDeleteIds = existingLocationIds.filter(
                    (id) => !incomingLocationIds.includes(id),
                )
                if (toDeleteIds.length > 0) {
                    await ProductLocation.destroy({
                        where: {
                            productId: product.id,
                            locationId: toDeleteIds,
                        },
                    })
                }
            }
            const result = await Product.findOne({
                where: { id: product.id },
                include: [
                    { model: PriceList },
                    { model: Category },
                    { model: ProductImage, order: [['rank', 'ASC']] },
                    {
                        model: Location,
                        through: { attributes: ['quantity'] },
                        as: 'locations',
                    },
                ],
            })
            return result
        } catch (error) {
            const cleanMessage =
                'Error in saveProduct: ' +
                ((error as any)?.original?.sqlMessage ||
                    (error as any)?.parent?.sqlMessage ||
                    (error as any)?.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = (error as any)?.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            return {
                response: encryptPayload({
                    error: 'Failed to create or update product with pricelists and images',
                }),
            }
        }
    }

    @Post('save-item')
    @UseInterceptors(FilesInterceptor('files'))
    async createOrUpdateItem(
        @Body() body: any,
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const {
                id,
                name,
                description,
                type,
                categoryId,
                images,
                locations,
                invoices,
                token,
            } = decryptedBody as {
                id?: number
                name: string
                description?: string
                type: string
                categoryId?: number
                images: {
                    image?: string
                    type: string
                    rank: number
                    existing?: {
                        id: number
                        fileName: string
                        type?: string
                        rank?: number
                    }
                }[]
                locations: {
                    id?: number
                    locationId: number
                    quantity: number
                }[]
                invoices: {
                    id: number
                    date: string
                    quantity: number
                    unitPrice: number
                    basePrice: number
                    weight: string
                }[]
                token: string
            }
            if (!name || !type || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Name, type and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            let item
            if (id) {
                item = await Item.findByPk(id)
                if (!item) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Item not found',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                await item.update({
                    name,
                    description,
                    type,
                    categoryId,
                })
            } else {
                item = await Item.create({
                    name,
                    description,
                    type,
                    categoryId,
                })
            }

            const allExistingImages = await ItemImage.findAll({
                where: { itemId: item.toJSON().id },
            })
            // Delete images not in the request
            const existingImageIds = images.map((img) => img.existing?.id)
            const imagesToDelete = allExistingImages.filter(
                (img) => !existingImageIds.includes(img.toJSON().id),
            )
            const deletedImageIds = []
            for (const img of imagesToDelete) {
                // Delete file
                const imagePath = img.toJSON().image
                const fullPath = path.join(
                    process.env.INVENTORY_PATH || '',
                    imagePath,
                )
                if (existsSync(fullPath)) {
                    // Check if imagePath is not referenced in ItemImage model
                    const existingImage = await ItemImage.findAll({
                        where: { image: imagePath },
                    })
                    if (existingImage.length === 1) {
                        unlinkSync(fullPath)
                    }
                }
                deletedImageIds.push(img.toJSON().id)
                // Delete record
                await img.destroy()
            }
            // Handle images
            const imagesToAdd: { image: string; type: string; rank: number }[] =
                []
            const newImages = images.filter((img) => !img.existing)
            const newImageIndex = 0
            // Save uploaded files
            if (files && files.length > 0) {
                for (const file of files) {
                    const savedPath = saveFile(file, 'item')
                    imagesToAdd.push({
                        image: savedPath,
                        type: newImages[newImageIndex].type,
                        rank: newImages[newImageIndex].rank,
                    })
                }
            }
            // Add new images
            for (const img of imagesToAdd) {
                await ItemImage.create({
                    itemId: item.toJSON().id,
                    image: img.image,
                    type: img.type,
                    rank: img.rank,
                })
            }

            // Update existing images
            const imagesToUpdate = images.filter(
                (img) =>
                    img.existing &&
                    img.existing.id &&
                    deletedImageIds.indexOf(img.existing.id) === -1,
            )
            for (const img of imagesToUpdate) {
                await ItemImage.update(
                    { type: img.type, rank: img.rank || null },
                    { where: { id: img.existing.id } },
                )
            }
            // Handle locations with quantities
            if (Array.isArray(locations)) {
                // Get existing ItemLocations for the item
                const existingLocations = await ItemLocation.findAll({
                    where: { itemId: item.toJSON().id },
                })
                const existingIds = existingLocations.map(
                    (loc) => loc.toJSON().id,
                )
                const providedIds = locations
                    .filter((loc) => loc.id)
                    .map((loc) => loc.id)

                // Update existing locations
                for (const location of locations) {
                    if (location.id) {
                        await ItemLocation.update(
                            { quantity: location.quantity },
                            { where: { id: location.id } },
                        )
                    } else {
                        await ItemLocation.create({
                            itemId: item.toJSON().id,
                            locationId: location.locationId,
                            quantity: location.quantity,
                        })
                    }
                }

                // Delete locations not in the provided list
                const idsToDelete = existingIds.filter(
                    (id) => !providedIds.includes(id),
                )
                if (idsToDelete.length > 0) {
                    await ItemLocation.destroy({
                        where: { id: idsToDelete },
                    })
                }
            }
            // Handle invoices
            if (Array.isArray(invoices)) {
                // Get existing ItemInvoices for the item
                const existingInvoices = await ItemInvoice.findAll({
                    where: { itemId: item.toJSON().id },
                })
                const existingIds = existingInvoices.map(
                    (inv) => inv.toJSON().id,
                )
                const providedIds = invoices

                // Update itemId for provided invoices
                for (const invoice of providedIds) {
                    if (existingIds.indexOf(invoice.id) > 0) {
                        await ItemInvoice.update(
                            {
                                itemId: item.toJSON().id,
                                date: invoice.date,
                                quantity: invoice.quantity,
                                unitprice: invoice.unitPrice,
                                basePrice: invoice.basePrice,
                                weight: invoice.weight,
                            },
                            { where: { id: invoice.id } },
                        )
                    } else {
                        await ItemInvoice.create({
                            itemId: item.toJSON().id,
                            date: invoice.date,
                            quantity: invoice.quantity,
                            unitprice: invoice.unitPrice,
                            basePrice: invoice.basePrice,
                            weight: invoice.weight,
                        })
                    }
                }

                // Delete invoices not in the provided list
                const idsToDelete = existingIds.filter(
                    (id) => !providedIds.includes(id),
                )
                if (idsToDelete.length > 0) {
                    await ItemInvoice.destroy({
                        where: { id: idsToDelete },
                    })
                }
            }

            return { response: encryptPayload(item) }
        } catch (error) {
            const cleanMessage =
                'Error in createOrUpdateItem: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to create or update item. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('delete-item')
    async deleteItem(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody as {
                id: number
                token: string
            }
            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Item id and token are required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check admin role
            try {
                await this.checkAdminRole(token)
            } catch (error) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: error.message }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Find item
            const item = await Item.findByPk(id)
            if (!item) {
                throw new HttpException(
                    {
                        error: encryptPayload({ error: 'Item not found' }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Delete item images with file cleanup
            const itemImages = await ItemImage.findAll({
                where: { itemId: id },
            })
            for (const img of itemImages) {
                const imagePath = img.toJSON().image
                const fullPath = path.join(
                    process.env.INVENTORY_PATH || '',
                    imagePath,
                )
                if (existsSync(fullPath)) {
                    // Check if imagePath is used in other ItemImage records (different items)
                    const otherItemImages = await ItemImage.findAll({
                        where: {
                            image: imagePath,
                            itemId: { [Op.ne]: id },
                        },
                    })
                    // Check if imagePath is used in ProductImage records
                    const productImages = await ProductImage.findAll({
                        where: { fileName: imagePath },
                    })
                    // If not used elsewhere, delete the file
                    if (
                        otherItemImages.length === 0 &&
                        productImages.length === 0
                    ) {
                        try {
                            unlinkSync(fullPath)
                        } catch (err) {
                            logger.error(
                                new Error(
                                    `Failed to delete item image file: ${err.message}`,
                                ),
                            )
                        }
                    }
                }
            }
            // Delete item image records
            await ItemImage.destroy({
                where: { itemId: id },
            })

            // Delete item locations
            await ItemLocation.destroy({
                where: { itemId: id },
            })

            // Delete item
            await item.destroy()

            return {
                response: encryptPayload({
                    message: 'Item deleted successfully',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in deleteItem: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to delete item. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('get-items')
    async getItems(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { name, description, category, image } = decryptedBody as {
                name?: string
                description?: string
                category?: string
                image?: boolean | null
            }
            const whereClause: any = {}
            if (name) whereClause.name = { [Op.like]: `%${name}%` }
            if (description)
                whereClause.description = { [Op.like]: `%${description}%` }
            if (category && category !== 'All' && Boolean(category) === true) {
                // Find category by name
                const categoryObj = await Category.findOne({
                    where: { category },
                })
                if (categoryObj) {
                    whereClause.categoryId = categoryObj.getDataValue('id')
                } else {
                    return { response: encryptPayload([]) }
                }
            }

            let items = await Item.findAll({
                where: whereClause,
                include: [
                    {
                        model: Category,
                    },
                    {
                        model: ItemImage,
                    },
                    {
                        model: ItemLocation,
                        include: [Location],
                    },
                    {
                        model: ItemInvoice,
                    },
                ],
                order: [['id', 'ASC']],
            })

            if (image === true) {
                // Items with at least one image
                items = items.filter((item) => item.toJSON().images?.length > 0)
            } else if (image === false) {
                // Items with no images
                items = items.filter(
                    (item) => item.toJSON().images?.length === 0,
                )
            }

            return { response: encryptPayload(items) }
        } catch (error) {
            const cleanMessage =
                'Error in getItems: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch items. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}
