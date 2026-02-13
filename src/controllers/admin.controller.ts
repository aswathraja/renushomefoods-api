import {
    Body,
    Controller,
    Get,
    Headers,
    HttpException,
    HttpStatus,
    Post,
    Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import ExcelJS from 'exceljs'
import type { Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { Op } from 'sequelize'
import { sequelize } from '../database/db'
import { logger } from '../logger/logger'
import {
    AdCampaign,
    AdCampaignUsers,
    Cart,
    CartProduct,
    CouponCode,
    CouponDiscounts,
    CouponProducts,
    CouponUsers,
    Order,
    OrderCoupon,
    PriceList,
    Product,
    Role,
    User,
    UserAddress,
    UserRole,
    UserSession,
} from '../models/models'
import { AppService } from '../services/app.service'
import {
    decryptPayload,
    deleteFileIfExists,
    encryptPayload,
    hashPassword,
    saveFile,
} from '../utils/utils'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

@Controller('admin')
export class AdminController {
    constructor(private appService: AppService) {}

    // Common function to authenticate if the user has admin role (roleId 1)
    async authenticateAdmin(authHeader: string): Promise<any> {
        // Extract token from Authorization header
        const token = authHeader?.replace('Bearer ', '') || ''
        if (!token) {
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Authorization header is required.',
                    }),
                },
                HttpStatus.BAD_REQUEST,
            )
        }

        try {
            // Verify JWT token validity
            jwt.verify(token, JWT_SECRET)
        } catch {
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Invalid or expired token.',
                    }),
                },
                HttpStatus.UNAUTHORIZED,
            )
        }

        // Check if token exists in DB and is not expired
        const session = await UserSession.findOne({
            where: {
                token,
                isExpired: false,
            },
        })

        if (!session) {
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Session not found or expired.',
                    }),
                },
                HttpStatus.FORBIDDEN,
            )
        }

        // Check expiry
        if (new Date() > session.expiry) {
            await session.update({ isExpired: true })
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Session expired.',
                    }),
                },
                HttpStatus.FORBIDDEN,
            )
        }

        // Get userId from session
        const userId = session.toJSON().userId

        // Fetch user with roles
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] }, // exclude junction table attributes
                },
            ],
        })

        if (!user) {
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'User not found.',
                    }),
                },
                HttpStatus.NOT_FOUND,
            )
        }

        // Check if user has admin role (roleId 1)
        const roles = user.toJSON().roles || []
        const isAdmin = roles.some((role: any) => role.id === 1)
        if (!isAdmin) {
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Access denied. Admin role required.',
                    }),
                },
                HttpStatus.FORBIDDEN,
            )
        }

        return user
    }

    @Post('ad-campaigns')
    async getAllAdCampaigns(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request to extract filters
            const {
                name,
                fromStartDate,
                toStartDate,
                fromEndDate,
                toEndDate,
                subject,
                message,
                users,
            } = decryptPayload(body.request)
            // Adjust dates to be timezone agnostic and filter by date only
            let adjustedFromStartDate = fromStartDate
            let adjustedToStartDate = toStartDate
            let adjustedFromEndDate = fromEndDate
            let adjustedToEndDate = toEndDate
            if (fromStartDate) {
                adjustedFromStartDate = new Date(
                    fromStartDate + 'T00:00:00.000Z',
                )
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toStartDate) {
                adjustedToStartDate = new Date(toStartDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (fromEndDate) {
                adjustedFromEndDate = new Date(fromEndDate + 'T00:00:00.000Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toEndDate) {
                adjustedToEndDate = new Date(toEndDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }

            // Convert users array to CSV string
            const userIds = Array.isArray(users) ? users.join(',') : ''
            // Call stored procedure
            const results = await sequelize.query(
                'CALL GetAdCampaigns(:name, :fromStartDate, :endStartDate, :fromEndDate, :toEndDate, :subject, :message, :userIds)',
                {
                    replacements: {
                        name: name || null,
                        fromStartDate: adjustedFromStartDate || null,
                        endStartDate: adjustedToStartDate || null,
                        fromEndDate: adjustedFromEndDate || null,
                        toEndDate: adjustedToEndDate || null,
                        subject: subject || null,
                        message: message || null,
                        userIds: userIds || null,
                    },
                },
            )

            // Group users by adCampaignId
            const campaignsMap: { [key: number]: any } = {}
            ;(results as any[]).forEach((row: any) => {
                const adCampaignId = row.adCampaignId
                if (!campaignsMap[adCampaignId]) {
                    campaignsMap[adCampaignId] = {
                        id: row.adCampaignId,
                        name: row.name,
                        startDate: row.startDate,
                        endDate: row.endDate,
                        subject: row.subject,
                        message: row.message,
                        imagePath: row.imagePath,
                        users: [],
                    }
                }
                if (row.userId) {
                    campaignsMap[adCampaignId].users.push({
                        id: row.userId,
                        name: row.userName,
                        email: row.userEmail,
                        phone: row.userPhone,
                    })
                }
            })
            const adCampaigns = Object.values(campaignsMap)

            return {
                response: encryptPayload({ adCampaigns }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getAllAdCampaigns: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch AdCampaigns. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    // New APIs for AdCampaigns:

    @Post('get-ad-campaign')
    async getAdCampaignById(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            const { id } = decryptPayload(body.request)
            if (!id) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Campaign id is required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            const adCampaign = await AdCampaign.findByPk(id, {
                include: [
                    {
                        model: User,
                        as: 'users',
                        through: { attributes: [] },
                        attributes: ['id', 'name', 'email', 'phone'],
                    },
                ],
            })

            if (!adCampaign) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'AdCampaign not found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            return {
                response: encryptPayload({ adCampaign }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getAdCampaignById: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to fetch AdCampaign by id. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-ad-campaign')
    @UseInterceptors(FileInterceptor('file'))
    async saveOrUpdateAdCampaign(
        @UploadedFile() file: Express.Multer.File,
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)
            const decryptedBody = decryptPayload(body.request)
            const { id, name, startDate, endDate, message, subject, userIds } =
                decryptedBody

            if (
                !name ||
                !startDate ||
                !endDate ||
                !message ||
                !subject ||
                !Array.isArray(userIds)
            ) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Missing required fields: name, startDate, endDate, message, subject, userIds',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Deduplicate userIds to prevent duplicates in AdCampaignUsers
            const uniqueUserIds = Array.from(new Set(userIds))

            // Ensure STATIC_PATH environment variable is set
            const adsPath = process.env.STATIC_PATH
            if (!adsPath) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'STATIC_PATH environment variable is not set.',
                        }),
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR,
                )
            }

            let adCampaign: AdCampaign

            if (id) {
                // Update existing campaign
                adCampaign = await AdCampaign.findByPk(id)
                if (!adCampaign) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'AdCampaign not found for update.',
                            }),
                        },
                        HttpStatus.NOT_FOUND,
                    )
                }

                const updateData: any = {
                    name,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    message,
                    subject,
                }

                if (file) {
                    // Delete old file if exists
                    deleteFileIfExists(adCampaign.toJSON().imagePath as string)
                    // Save new file
                    const savedImagePath = saveFile(file, 'ads')
                    // Add imagePath to update data
                    updateData.imagePath = savedImagePath
                }

                // Update adCampaign using AdCampaign.update() method
                await AdCampaign.update(updateData, {
                    where: { id: adCampaign.toJSON().id },
                })

                // Instead of destroying all AdCampaignUsers, selectively update

                // Fetch existing AdCampaignUsers for this campaign
                const existingCampaignUsers = await AdCampaignUsers.findAll({
                    where: { adCampaignId: adCampaign.toJSON().id },
                })

                const existingUserIds = existingCampaignUsers.map(
                    (acu) => acu.toJSON().userId,
                )
                // Find userIds to add and remove
                const userIdsToAdd = uniqueUserIds.filter(
                    (userId: number) => !existingUserIds.includes(userId),
                )
                const userIdsToRemove = existingUserIds.filter(
                    (userId: number) => !uniqueUserIds.includes(userId),
                )

                // Remove AdCampaignUsers not in the new userIds list
                if (userIdsToRemove.length > 0) {
                    await AdCampaignUsers.destroy({
                        where: {
                            adCampaignId: adCampaign.toJSON().id,
                            userId: userIdsToRemove,
                        },
                    })
                }

                // Add new AdCampaignUsers that don't exist already
                // Use bulkCreate with ignoreDuplicates to prevent duplicates if supported
                if (userIdsToAdd.length > 0) {
                    const recordsToCreate = userIdsToAdd.map((userId) => ({
                        adCampaignId: adCampaign.toJSON().id,
                        userId,
                    }))
                    await AdCampaignUsers.bulkCreate(recordsToCreate, {
                        ignoreDuplicates: true, // only if supported by Sequelize and underlying DB
                    })
                }
            } else {
                // Creating new campaign
                let savedImagePath = null
                if (file) {
                    savedImagePath = saveFile(file, 'ads')
                }

                adCampaign = await AdCampaign.create({
                    name,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    message,
                    subject,
                    imagePath: savedImagePath,
                })

                // Deduplicate userIds before creating
                const uniqueUserIdsForCreate = Array.from(new Set(userIds))

                const recordsToCreate = uniqueUserIdsForCreate.map(
                    (userId) => ({
                        adCampaignId: adCampaign.id,
                        userId,
                    }),
                )
                await AdCampaignUsers.bulkCreate(recordsToCreate, {
                    ignoreDuplicates: true,
                })
            }

            // Recommend adding a unique constraint on (adCampaignId, userId) at the DB level
            // to enforce uniqueness and avoid duplicates even with race conditions

            return {
                response: encryptPayload({
                    id: adCampaign.id,
                    message: id
                        ? 'AdCampaign updated successfully.'
                        : 'AdCampaign created successfully.',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in saveOrUpdateAdCampaign: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to save or update AdCampaign. ' +
                            errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('delete-ad-campaign')
    async deleteAdCampaign(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            const { id } = decryptPayload(body.request)

            if (!id) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'AdCampaign id is required for deletion.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            const adCampaign = await AdCampaign.findByPk(id)
            if (!adCampaign) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'AdCampaign not found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            // Delete associated AdCampaignUsers
            await AdCampaignUsers.destroy({
                where: { adCampaignId: adCampaign.toJSON().id },
            })

            // Delete image file if exists
            if (adCampaign.toJSON().imagePath) {
                try {
                    deleteFileIfExists(adCampaign.toJSON().imagePath as string)
                } catch (err) {
                    logger.error(
                        new Error(
                            `Failed to delete ad campaign image file: ${err.message}`,
                        ),
                    )
                }
            }

            // Delete the AdCampaign
            await adCampaign.destroy()

            return {
                response: encryptPayload({
                    message: 'AdCampaign deleted successfully.',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in deleteAdCampaign: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to delete AdCampaign. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('roles')
    async getRoles(@Headers() headers: Record<string, string>) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Fetch all roles
            const roles = await Role.findAll()

            // Return encrypted roles
            return {
                response: encryptPayload({ roles }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getRoles: ' +
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
                        error: 'Failed to fetch roles. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('user-details')
    async getUserDetails(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request to get userId, email and phone (optional)
            const decryptedBody = decryptPayload(body.request)
            const { userId, email, phone } = decryptedBody

            if (!userId) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'userId is required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Find user by id including all addresses and roles except password
            const user = await User.findByPk(userId, {
                attributes: ['id', 'name', 'email', 'phone'],
                include: [
                    {
                        model: UserAddress,
                        as: 'UserAddresses',
                    },
                    {
                        model: Role,
                        as: 'roles',
                        through: { attributes: [] }, // exclude junction table attributes
                    },
                ],
            })

            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            // Optional: validate email and phone if provided match the found user
            if (
                (email && user.toJSON().email !== email) ||
                (phone && user.toJSON().phone !== phone)
            ) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Provided email or phone does not match user',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Return encrypted user details with addresses and roles
            return {
                response: encryptPayload({ user: user.toJSON() }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getUserDetails: ' +
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
                        error: 'Failed to fetch user details. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('dashboard-kpis')
    async getDashboardKPIs(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request if needed, but assuming filters are in body.request
            const {
                fromDate,
                toDate,
                orderStatus,
                category,
                product,
                name,
                phone,
            } = decryptPayload(body.request)

            // Adjust dates to be timezone agnostic and filter by date only
            let adjustedFromDate = fromDate
            let adjustedToDate = toDate
            if (fromDate) {
                adjustedFromDate = new Date(fromDate + 'T00:00:00.000Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toDate) {
                adjustedToDate = new Date(toDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }

            // Call stored procedure
            const [results] = await sequelize.query(
                'CALL GetDashboardKPIs(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)',
                {
                    replacements: {
                        fromDate: adjustedFromDate || null,
                        toDate: adjustedToDate || null,
                        orderStatus: orderStatus || null,
                        category: category || null,
                        product: product || null,
                        name: name || null,
                        phone: phone || null,
                    },
                },
            )
            const kpis = results as any

            const response = {
                totalSales: kpis.totalSales || 0,
                avgOrderValue:
                    kpis.totalOrders > 0
                        ? kpis.totalSales / kpis.totalOrders
                        : 0,
                totalOrders: kpis.totalOrders || 0,
                pendingOrders: kpis.pendingOrders || 0,
            }

            return {
                response: encryptPayload(response),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getDashboardKPIs: ' +
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
                            'Failed to fetch dashboard KPIs. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('chart-data')
    async getChartData(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request to extract filters
            const {
                fromDate,
                toDate,
                orderStatus,
                category,
                product,
                name,
                phone,
            } = decryptPayload(body.request)

            // Adjust dates to be timezone agnostic and filter by date only
            let adjustedFromDate = fromDate
            let adjustedToDate = toDate
            if (fromDate) {
                adjustedFromDate = new Date(fromDate + 'T00:00:00.000Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toDate) {
                adjustedToDate = new Date(toDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            // Define chart types
            const chartTypes = [
                'Total Sales by Category',
                'Total Sales by Product',
                'Total Sales by Order Status',
                'Products with Quantities by Order Status',
            ]

            // Initialize response object
            const chartData: any = {}

            // Call stored procedure for each chart type
            for (const chartType of chartTypes) {
                const results = await sequelize.query(
                    'CALL getChartData(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone, :chartType)',
                    {
                        replacements: {
                            fromDate: adjustedFromDate || null,
                            toDate: adjustedToDate || null,
                            orderStatus: orderStatus || null,
                            category: category || null,
                            product: product || null,
                            name: name || null,
                            phone: phone || null,
                            chartType,
                        },
                    },
                )

                let processedResults: any = results

                // Special processing for 'Products with Quantities by Order Status'
                if (chartType === 'Products with Quantities by Order Status') {
                    const productMap: {
                        [key: string]: {
                            pendingQuantity: number
                            fulfilledQuantity: number
                        }
                    } = {}
                    ;(results as any[]).forEach((row: any) => {
                        const product =
                            row.product ||
                            row.Product ||
                            row.productName ||
                            row.ProductName

                        if (!productMap[product]) {
                            productMap[product] = {
                                pendingQuantity: 0,
                                fulfilledQuantity: 0,
                            }
                        }

                        productMap[product].pendingQuantity +=
                            Number(row.pendingQuantity) ?? 0
                        productMap[product].fulfilledQuantity +=
                            Number(row.fulfilledQuantity) ?? 0
                    })

                    processedResults = Object.entries(productMap).map(
                        ([product, quantities]) => ({
                            product,
                            pendingQuantity: quantities.pendingQuantity,
                            fulfilledQuantity: quantities.fulfilledQuantity,
                        }),
                    )
                }

                // Map chart type to key in response
                const key = chartType
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .replace(/[^a-zA-Z0-9]/g, '')
                chartData[key] = processedResults
            }
            return {
                response: encryptPayload(chartData),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getChartData: ' +
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
                        error: 'Failed to fetch chart data. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('fetch-orders')
    async fetchOrders(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request to extract filters
            const {
                fromDate,
                toDate,
                orderStatus,
                category,
                product,
                name,
                phone,
            } = decryptPayload(body.request)

            // Adjust dates to be timezone agnostic and filter by date only
            let adjustedFromDate = fromDate
            let adjustedToDate = toDate
            if (fromDate) {
                adjustedFromDate = new Date(fromDate + 'T00:00:00.000Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toDate) {
                adjustedToDate = new Date(toDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }

            // Call stored procedure to fetch orders
            const results = await sequelize.query(
                'CALL GetOrders(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)',
                {
                    replacements: {
                        fromDate: adjustedFromDate || null,
                        toDate: adjustedToDate || null,
                        orderStatus: orderStatus || null,
                        category: category || null,
                        product: product || null,
                        name: name || null,
                        phone: phone || null,
                    },
                },
            )

            // Group products by orderId
            const ordersMap: { [key: number]: any } = {}
            ;(results as any[]).forEach((row: any) => {
                const orderId = row.orderId
                if (!ordersMap[orderId]) {
                    ordersMap[orderId] = {
                        orderId: row.orderId,
                        userId: row.userId,
                        userAddressId: row.userAddressId,
                        cartId: row.cartId,
                        orderDate: row.orderDate,
                        orderStatus: row.orderStatus,
                        shippingMethod: row.shippingMethod,
                        paymentMethod: row.paymentMethod,
                        expectedDeliveryDate: row.expectedDeliveryDate,
                        deliveryName: row.deliveryName,
                        addressLine1: row.addressLine1,
                        city: row.city,
                        state: row.state,
                        country: row.country,
                        pincode: row.pincode,
                        deliveryPhone: row.deliveryPhone,
                        customerName: row.customerName,
                        customerPhone: row.customerPhone,
                        customerEmail: row.customerEmail,
                        notes: row.notes,
                        deliveryNote: row.deliveryNote,
                        products: [],
                        shippingDiscount: row.shippingDiscount,
                        couponCode: row.couponCode,
                        productDiscount: row.productDiscount,
                    }
                }
                ordersMap[orderId].products.push({
                    quantity: row.quantity,
                    productName: row.productName,
                    price: row.price,
                    categoryName: row.categoryName,
                    productTotal: row.productTotal,
                    priceListId: row.priceListId,
                    productId: row.productId,
                    productDiscount: row.productDiscount,
                })
            })
            const orders = Object.values(ordersMap)
            // Calculate orderTotal for each order
            orders.forEach((order: any) => {
                const orderTotal = order.products.reduce(
                    (sum: number, product: any) =>
                        sum + (product?.productTotal || 0),
                    0,
                )
                const productDiscount = order.products.reduce(
                    (sum: number, product: any) =>
                        sum + (product?.productDiscount || 0),
                    0,
                )
                order.orderTotal = orderTotal
                order.productDiscount = productDiscount
            })

            return {
                response: encryptPayload({ orders }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in fetchOrders: ' +
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
                        error: 'Failed to fetch orders. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('user-list')
    async getUsers(@Headers() headers: Record<string, string>) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Fetch all users with only name and phone
            const users = await User.findAll({
                attributes: ['id', 'name', 'phone', 'email'],
            })
            return {
                response: encryptPayload({ users }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getUsers: ' +
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
                        error: 'Failed to fetch users. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('users')
    async getUsersWithDefaultAddress(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt filters from request body
            const decryptedBody = decryptPayload(body.request)
            const {
                name,
                phone,
                email,
                roles, // roles array of role IDs
            } = decryptedBody

            // Build where clause for User attributes dynamically
            const userWhere: any = {}
            if (name) {
                userWhere.name = { [Op.like]: `%${name}%` }
            }
            if (phone) {
                userWhere.phone = { [Op.like]: `%${phone}%` }
            }
            if (email) {
                userWhere.email = { [Op.like]: `%${email}%` }
            }

            // Build role filtering condition if roles supplied
            let roleWhere = undefined
            if (Array.isArray(roles) && roles.length > 0) {
                roleWhere = { id: { [Op.or]: roles } }
            }

            // Option A: Fetch users with filters, default address, and roles via Sequelize ORM
            /*
            const users = await User.findAll({
                where: userWhere,
                attributes: ['id', 'name', 'phone', 'email'],
                include: [
                    {
                        model: UserAddress,
                        as: 'UserAddresses',
                        where: { isDefault: true },
                        attributes: [
                            'id',
                            'name',
                            'addressLine1',
                            'city',
                            'state',
                            'country',
                            'pincode',
                            'phone',
                            'isDefault',
                        ],
                        required: false,
                    },
                    {
                        model: Role,
                        as: 'roles',
                        through: { attributes: [] },
                        where: roleWhere,
                        required: roleWhere ? true : false,
                    },
                ],
            })
            return {
                response: encryptPayload({ users }),
            }
            */

            // Option B: Call stored procedure to get filtered users (preferred for performance)
            // Convert roles array to CSV string
            const roleIds = Array.isArray(roles) ? roles.join(',') : ''

            const results = await sequelize.query(
                'CALL GetUsersWithDefaultAddress(:name, :phone, :email, :roles)',
                {
                    replacements: {
                        name: name || null,
                        phone: phone || null,
                        email: email || null,
                        roles: roleIds || null,
                    },
                },
            )

            return {
                response: encryptPayload({ users: results }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getUsersWithDefaultAddress: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to fetch users with default address. ' +
                            errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('user-addresses')
    async getUserAddresses(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            const { userId } = decryptPayload(body.request)
            const addresses = await UserAddress.findAll({
                where: { userId },
                attributes: [
                    'id',
                    'name',
                    'addressLine1',
                    'city',
                    'state',
                    'country',
                    'pincode',
                    'phone',
                ],
            })
            return {
                response: encryptPayload({ addresses }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in getUserAddresses: ' +
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
                            'Failed to fetch user addresses. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-order')
    async saveOrder(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request
            const decryptedBody = decryptPayload(body.request)
            const {
                orderId,
                userAddressId,
                cartId,
                orderDate,
                orderStatus,
                shippingMethod,
                expectedDeliveryDate,
                deliveryName,
                addressLine1,
                city,
                state,
                country,
                pincode,
                deliveryPhone,
                customerName,
                customerPhone,
                customerEmail,
                products,
                notes,
                deliveryNote,
                paymentMethod,
                couponId,
            } = decryptedBody

            // Step 1: Check if user exists by customerPhone, if not create user
            let user = await User.findOne({
                where: { phone: customerPhone },
            })
            const isNewUser = Boolean(user)
            if (!user) {
                const otp = Math.floor(1000 + Math.random() * 9000).toString()
                user = await User.create({
                    name: customerName,
                    username: customerPhone,
                    email:
                        customerEmail ||
                        customerName.toLowerCase().replace(/\s+/gim, '') +
                            '@renushomefoods.com', // Assuming email not provided
                    phone: customerPhone,
                    password: '',
                    otp,
                })
                user = await User.findOne({
                    where: {
                        phone: customerPhone,
                        name: customerName,
                    },
                })
                // Assign 'Buyer' role (roleId 2) to the user
                let buyerRole = await Role.findByPk(2)
                if (!buyerRole) {
                    buyerRole = await Role.create({ id: 2, name: 'Buyer' })
                }
                await UserRole.create({
                    userId: user.toJSON().id,
                    roleId: 2,
                })
            }

            // Step 2: Check userAddressId, if not provided create new address and set as default
            let address
            if (userAddressId) {
                address = await UserAddress.findByPk(userAddressId)
                if (!address || address.toJSON().userId !== user.toJSON().id) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Invalid userAddressId.',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
            } else {
                // Create new address
                address = await UserAddress.create({
                    userId: user.toJSON().id,
                    name: deliveryName,
                    addressLine1,
                    city,
                    state,
                    country,
                    pincode,
                    phone: deliveryPhone,
                    isDefault: !isNewUser,
                })
                address = await UserAddress.findOne({
                    where: {
                        name: deliveryName,
                        userId: user.toJSON().id,
                        city,
                        state,
                        country,
                        pincode,
                        phone: deliveryPhone,
                        isDefault: !isNewUser,
                    },
                })
            }
            // Step 3: Handle cart
            let cart
            if (cartId) {
                cart = await Cart.findByPk(cartId)
                if (!cart || cart.userId !== user.toJSON().id) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Invalid cartId.',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                // Update cart status if needed
                // await cart.update({ status: 'Created' })
            } else {
                cart = await Cart.create({
                    userId: user.toJSON().id,
                    createdBy: 'Admin',
                    updatedBy: 'Admin',
                    status: 'Ordered',
                })
            }
            let isProductsModified = false
            // Handle products: remove not in request, update/create those in request
            const existingCartProducts = await CartProduct.findAll({
                where: { cartId: cart.toJSON().id },
                include: [Product],
            })
            const productIdsInRequest = products.map((p: any) => p.productName)
            // Find products by name
            const productsInDB = await Product.findAll({
                where: { name: { [Op.in]: productIdsInRequest } },
                include: [PriceList],
            })
            const productMap = new Map()
            productsInDB.forEach((prod: any) => {
                productMap.set(prod.name, prod.toJSON())
            })
            // Update or create CartProducts
            for (const prod of products) {
                const dbProduct = productMap.get(prod.productName)
                if (!dbProduct) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: `Product ${prod.productName} not found.`,
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                const priceList = dbProduct.PriceLists.find(
                    (pl: any) => pl.id === prod.priceListId,
                )
                if (!priceList) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: `PriceList for ${prod.productName} not found.`,
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                const existing = existingCartProducts.find(
                    (cp: any) =>
                        cp.productId === dbProduct.id &&
                        cp.priceListId === prod.priceListId,
                )
                if (existing) {
                    if (prod.quantity !== existing.toJSON().quantity) {
                        await existing.update({ quantity: prod.quantity })
                        isProductsModified = true
                    }
                } else {
                    await CartProduct.create({
                        cartId: cart.id,
                        productId: dbProduct.id,
                        priceListId: prod.priceListId,
                        quantity: prod.quantity,
                    })
                    isProductsModified = true
                }
            }
            // Delete CartProducts not in request
            for (const existing of existingCartProducts) {
                if (
                    productIdsInRequest.indexOf(
                        existing.toJSON().Product?.name,
                    ) === -1
                ) {
                    await existing.destroy()
                    isProductsModified = true
                }
            }

            // Step 4: Create or update Order
            let order
            let isNewOrder = false
            let isOrderShipped = false
            let isOrderDelivered = false
            if (orderId) {
                order = await Order.findByPk(orderId)
                if (!order) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Order not found.',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
                isOrderShipped =
                    order.toJSON().status !== orderStatus &&
                    orderStatus === 'Shipped'
                isOrderDelivered =
                    order.toJSON().status !== orderStatus &&
                    orderStatus === 'Delivered'
                await order.update({
                    userId: user.id,
                    userAddressId: address.toJSON().id,
                    cartId: cart.id,
                    notes: notes || '', // Assuming no notes
                    deliveryNote: deliveryNote || '',
                    shippingMethod,
                    paymentMethod: paymentMethod, // Assuming default
                    status: orderStatus,
                    orderedDate: new Date(orderDate),
                    expectedDeliveryDate: new Date(expectedDeliveryDate),
                })
                isNewOrder = false
                // Handle couponId: save or update in OrderCoupon table
                const existingOrderCoupon = await OrderCoupon.findOne({
                    where: { orderId: order.toJSON().id },
                })
                if (couponId) {
                    if (existingOrderCoupon) {
                        await existingOrderCoupon.update({
                            couponCodeId: couponId,
                        })
                    } else {
                        await OrderCoupon.create({
                            orderId: order.toJSON().id,
                            couponCodeId: couponId,
                        })
                    }
                } else {
                    await existingOrderCoupon?.update({
                        couponCodeId: null,
                    })
                }
            } else {
                order = await Order.create({
                    userId: user.toJSON().id,
                    userAddressId: address.toJSON().id,
                    cartId: cart.toJSON().id,
                    notes: notes || '',
                    deliveryNote: deliveryNote || '',
                    shippingMethod,
                    paymentMethod: paymentMethod,
                    status: orderStatus,
                    orderedDate: new Date(orderDate),
                    expectedDeliveryDate: new Date(expectedDeliveryDate),
                })
                order = await Order.findOne({
                    where: {
                        cartId: cart.toJSON().id,
                        userId: user.toJSON().id,
                    },
                })
                isNewOrder = true
                // Handle couponId: save or update in OrderCoupon table
                if (couponId) {
                    const existingOrderCoupon = await OrderCoupon.findOne({
                        where: { orderId: order.toJSON().id },
                    })
                    if (existingOrderCoupon) {
                        await existingOrderCoupon.update({
                            couponCodeId: couponId,
                        })
                    } else {
                        await OrderCoupon.create({
                            orderId: order.toJSON().id,
                            couponCodeId: couponId,
                        })
                    }
                }
            }
            if (isProductsModified === true || isNewOrder === true) {
                const orderInvoiceData =
                    await this.appService.getOrderInvoiceData(
                        order.toJSON().id,
                        isNewOrder === true
                            ? 'Thank you for placing your order. Please find the invoice below'
                            : isProductsModified === true
                              ? 'We have updated your order. Please find the updated invoice below'
                              : '',
                    )
                // Send order invoice email to user
                await this.appService.sendMail({
                    to: user.toJSON().email,
                    subject:
                        isNewOrder === true
                            ? "Your Order Invoice - Renu's Home Foods"
                            : isProductsModified === true
                              ? "Your Updated Order Invoice - Renu's Home Foods"
                              : '',
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })

                // Send order invoice email to admin
                await this.appService.sendMail({
                    to: process.env.ORDERS_EMAIL,
                    subject: isNewOrder
                        ? `New Order Placed - ${user.toJSON().name} (${user.toJSON().phone})`
                        : isProductsModified
                          ? `Order Updated - ${user.toJSON().name} (${user.toJSON().phone})`
                          : '',
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })
            }
            if (isOrderShipped) {
                const orderInvoiceData =
                    await this.appService.getOrderInvoiceData(
                        order.toJSON().id,
                        'We have shipped order, you should recieve your order as per our shipping policy with estimated delivery by <strong>' +
                            this.appService.formatDate(
                                new Date(order.toJSON().expectedDeliveryDate),
                                false,
                            ) +
                            '</strong>. Please find the invoice below',
                    )
                // Send order invoice email to user
                await this.appService.sendMail({
                    to: user.toJSON().email,
                    subject: "Order Shipped - Renu's Home Foods",
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })
            }
            if (isOrderDelivered) {
                const orderInvoiceData =
                    await this.appService.getOrderInvoiceData(
                        order.toJSON().id,
                        'Your Order has been delivered. Hope you enjoy our delicacies as much as we loved making it for you. Please find the invoice below',
                    )
                // Send order invoice email to user
                await this.appService.sendMail({
                    to: user.toJSON().email,
                    subject: "Order Delivered - Renu's Home Foods",
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })
            }
            const encryptedResponse = {
                response: encryptPayload({
                    orderId: order.id,
                    cartId: cart.id,
                    userAddressId: address.toJSON().id,
                    userId: user.toJSON().id,
                    message: 'Order created/updated successfully.',
                }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in createOrUpdateOrder: ' +
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
                            'Failed to create or update order. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-coupon')
    async createCoupon(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request
            const decryptedBody = decryptPayload(body.request)
            const {
                couponId,
                code,
                startDate,
                endDate,
                isActive,
                isGroupable,
                isForNewUsers,
                isForAllUsers,
                discounts,
                productIds,
                userIds,
            } = decryptedBody

            // Validate required fields
            if (
                !code ||
                !startDate ||
                !endDate ||
                !discounts ||
                !productIds ||
                !userIds
            ) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Missing required fields: code, startDate, endDate, discounts, productIds, userIds.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            let couponCode
            let isUpdate = false

            if (couponId) {
                // Update existing coupon
                couponCode = await CouponCode.findByPk(couponId)
                if (!couponCode) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Coupon not found.',
                            }),
                        },
                        HttpStatus.NOT_FOUND,
                    )
                }
                await couponCode.update({
                    code,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    isActive: isActive !== undefined ? isActive : true,
                    isGroupable: isGroupable !== undefined ? isGroupable : true,
                    isForNewUsers:
                        isForNewUsers !== undefined ? isForNewUsers : false,
                    isForAllUsers:
                        isForAllUsers !== undefined ? isForAllUsers : false,
                })
                isUpdate = true
            } else {
                // Create new CouponCode
                couponCode = await CouponCode.create({
                    code,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    isActive: isActive !== undefined ? isActive : true,
                    isGroupable: isGroupable !== undefined ? isGroupable : true,
                    isForNewUsers:
                        isForNewUsers !== undefined ? isForNewUsers : false,
                    isForAllUsers:
                        isForAllUsers !== undefined ? isForAllUsers : false,
                })
            }

            // Compute productIdsToCreate
            let productIdsToCreate = productIds
            if (productIds.includes('All')) {
                const allProducts = await Product.findAll({
                    attributes: ['id'],
                })
                productIdsToCreate = allProducts.map((p: any) => p.id)
            }

            // Compute userIdsToCreate
            let userIdsToCreate = userIds
            if (userIds.includes('All')) {
                const allUsers = await User.findAll({
                    attributes: ['id'],
                })
                userIdsToCreate = allUsers.map((u: any) => u.toJSON().id)
            }
            // Append all admin users without duplicating IDs
            const adminUsers = await UserRole.findAll({
                where: { roleId: 1 },
                attributes: ['userId'],
            })
            const adminUserIds = adminUsers.map((ur: any) => ur.toJSON().userId)
            userIdsToCreate = [
                ...new Set([...userIdsToCreate, ...adminUserIds]),
            ]

            if (isUpdate) {
                // Handle discounts selectively
                const existingDiscounts = await CouponDiscounts.findAll({
                    where: { couponCodeId: couponId },
                })
                const discountNamesInRequest = discounts.map((d: any) => d.name)
                for (const discount of discounts) {
                    const existing = existingDiscounts.find(
                        (ed: any) => ed.toJSON().name === discount.name,
                    )
                    if (existing) {
                        await existing.update({
                            discount: discount.discount,
                            flatrate:
                                discount.flatrate !== undefined
                                    ? discount.flatrate
                                    : false,
                        })
                    } else {
                        await CouponDiscounts.create({
                            name: discount.name,
                            discount: discount.discount,
                            flatrate:
                                discount.flatrate !== undefined
                                    ? discount.flatrate
                                    : false,
                            couponCodeId: couponCode.id,
                        })
                    }
                }
                // Delete discounts not in request
                for (const existing of existingDiscounts) {
                    if (
                        !discountNamesInRequest.includes(existing.toJSON().name)
                    ) {
                        await existing.destroy()
                    }
                }

                // Handle products selectively
                const existingProducts = await CouponProducts.findAll({
                    where: { couponCodeId: couponId },
                    attributes: ['productId', 'id'],
                })
                const existingProductIds = existingProducts.map(
                    (ep: any) => ep.toJSON().productId,
                )
                for (const productId of productIdsToCreate) {
                    if (!existingProductIds.includes(productId)) {
                        await CouponProducts.create({
                            couponCodeId: couponCode.id,
                            productId,
                        })
                    }
                }
                // Delete products not in request
                for (const existing of existingProducts) {
                    if (
                        !productIdsToCreate.includes(
                            existing.toJSON().productId,
                        )
                    ) {
                        await existing.destroy()
                    }
                }

                // Handle users selectively
                const existingUsers = await CouponUsers.findAll({
                    where: { couponCodeId: couponId },
                    attributes: ['userId', 'id'],
                })
                const existingUserIds = existingUsers.map(
                    (eu: any) => eu.toJSON().userId,
                )
                for (const userId of userIdsToCreate) {
                    if (!existingUserIds.includes(userId)) {
                        await CouponUsers.create({
                            couponCodeId: couponCode.id,
                            userId,
                        })
                    }
                }
                // Delete users not in request
                for (const existing of existingUsers) {
                    if (!userIdsToCreate.includes(existing.toJSON().userId)) {
                        await existing.destroy()
                    }
                }
            } else {
                // For new coupons, create all
                for (const discount of discounts) {
                    await CouponDiscounts.create({
                        name: discount.name,
                        discount: discount.discount,
                        flatrate:
                            discount.flatrate !== undefined
                                ? discount.flatrate
                                : false,
                        couponCodeId: couponCode.id,
                    })
                }
                for (const productId of productIdsToCreate) {
                    await CouponProducts.create({
                        couponCodeId: couponCode.id,
                        productId,
                    })
                }
                for (const userId of userIdsToCreate) {
                    await CouponUsers.create({
                        couponCodeId: couponCode.id,
                        userId,
                    })
                }
            }

            return {
                response: encryptPayload({
                    couponId: couponCode.id,
                    message: isUpdate
                        ? 'Coupon updated successfully.'
                        : 'Coupon created successfully.',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in createCoupon: ' +
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
                        error: 'Failed to create coupon. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-user')
    async saveUser(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
    ) {
        const transaction = await sequelize.transaction()
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request
            const decryptedBody = decryptPayload(body.request)
            const { user, addresses } = decryptedBody

            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User data is required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            if (!Array.isArray(addresses)) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Addresses array is required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            let userInstance
            const isNewUser = !user.id

            // Check if user exists by id or phone or email (unique keys)
            if (user.id) {
                userInstance = await User.findByPk(user.id, { transaction })
            }
            if (!userInstance && user.phone) {
                userInstance = await User.findOne({
                    where: { phone: user.phone },
                    transaction,
                })
            }
            if (!userInstance && user.email) {
                userInstance = await User.findOne({
                    where: { email: user.email },
                    transaction,
                })
            }

            if (userInstance) {
                // Update existing user fields (excluding id)
                // Save password only if provided (could be empty string or non-empty)
                const passwordToSave =
                    user.hasOwnProperty('password') &&
                    Boolean(user?.password) === true
                        ? hashPassword(user.password)
                        : userInstance.toJSON().password
                await userInstance.update(
                    {
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        username: user.username || user.phone,
                        password: passwordToSave,
                        otp: null,
                    },
                    { transaction },
                )
            } else {
                // Create new user
                const passwordToSave =
                    user.hasOwnProperty('password') &&
                    user.password !== undefined
                        ? hashPassword(user.password)
                        : ''
                userInstance = await User.create(
                    {
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        username: user.username || user.phone,
                        password: passwordToSave,
                    },
                    { transaction },
                )
            }

            const userId = userInstance.toJSON().id

            // Handle roles - sync roles sent in user.roles (array of {id,name})
            if (Array.isArray(user.roles)) {
                // Fetch current user roles
                const currentUserRoles = await UserRole.findAll({
                    where: { userId },
                    transaction,
                })
                const currentRoleIds = currentUserRoles.map(
                    (ur) => ur.toJSON().roleId,
                )
                const requestedRoleIds = user.roles

                // Roles to add
                const rolesToAdd = requestedRoleIds.filter(
                    (id) => !currentRoleIds.includes(id),
                )
                // Roles to remove
                const rolesToRemove = currentRoleIds.filter(
                    (id) => !requestedRoleIds.includes(id),
                )

                // Add missing roles
                for (const roleId of rolesToAdd) {
                    await UserRole.create(
                        {
                            userId,
                            roleId,
                        },
                        { transaction },
                    )
                }

                // Remove roles not requested anymore
                if (rolesToRemove.length > 0) {
                    await UserRole.destroy({
                        where: {
                            userId,
                            roleId: rolesToRemove,
                        },
                        transaction,
                    })
                }
            }

            // Logic to delete UserAddresses not in the incoming addresses array
            const existingAddresses = await UserAddress.findAll({
                where: { userId },
                transaction,
            })
            const incomingAddressIds = addresses
                .filter((addr: any) => addr.id)
                .map((addr: any) => addr.id)
            for (const existingAddress of existingAddresses) {
                if (!incomingAddressIds.includes(existingAddress.toJSON().id)) {
                    await existingAddress.destroy({ transaction })
                }
            }

            // If new user and password is not set (empty or undefined), send reset password email
            const passwordIsSet =
                user.hasOwnProperty('password') &&
                typeof user.password === 'string' &&
                user.password !== ''
            const encryptedIdentifier = encryptPayload({
                identifier: userInstance.toJSON().username,
            })
            if (isNewUser && !passwordIsSet) {
                const otp = this.appService.generateRandomNumber(4)
                await userInstance.update({ otp }, { transaction })
                await this.appService.sendMail({
                    to: userInstance.toJSON().email,
                    subject:
                        "Renu's Home Foods - Password Reset OTP Verification",
                    template: 'simple-message',
                    data: {
                        logo: 'https://renushomefoods.com/static/logo.png',
                        userFullName: userInstance.toJSON().name,
                        message: `Your OTP to reset your password for your account with <b>${user.toJSON().email}</b> and phone number <b>${user.toJSON().phone}</b> is <b>${otp}</b>. <br/><br/> You can click <a href='${process.env.WEB_HOST}/reset-password/${encryptedIdentifier}'>here</a> to reset the password.<br/><br/> This OTP is valid for 10 minutes. Please <a href='${process.env.WEB_HOST}/contact'>contact us</a> if you havent requested this password reset.`,
                        year: new Date().getFullYear().toString(),
                    },
                })
            }
            // Handle resetPassword boolean if true, generate OTP and send email
            if (
                user.resetPassword === true &&
                Boolean(user?.password) === false
            ) {
                const otp = this.appService.generateRandomNumber(4)
                await userInstance.update({ otp }, { transaction })
                await this.appService.sendMail({
                    to: userInstance.toJSON().email,
                    subject:
                        "Renu's Home Foods - Password Reset OTP Verification",
                    template: 'simple-message',
                    data: {
                        logo: 'https://renushomefoods.com/static/logo.png',
                        userFullName: userInstance.toJSON().name,
                        message: `Your OTP to reset your password for your account with <b>${userInstance.toJSON().email}</b> and phone number <b>${userInstance.toJSON().phone}</b> is <b>${otp}</b>. <br/><br/> You can click <a href='${process.env.WEB_HOST}/reset-password/${encryptedIdentifier}'>here</a> to reset the password.<br/><br/> This OTP is valid for 10 minutes. Please <a href='${process.env.WEB_HOST}/contact'>contact us</a> if you havent requested this password reset.`,
                        year: new Date().getFullYear().toString(),
                    },
                })
            }

            // Save or update addresses
            for (const addr of addresses) {
                if (addr.id) {
                    // Update existing address if belongs to user
                    const existingAddress = await UserAddress.findOne({
                        where: { id: addr.id, userId },
                        transaction,
                    })
                    if (existingAddress) {
                        await existingAddress.update(
                            {
                                name: addr.name,
                                addressLine1: addr.addressLine1,
                                city: addr.city,
                                state: addr.state,
                                country: addr.country,
                                pincode: addr.pincode,
                                phone: addr.phone,
                                isDefault:
                                    addr.isDefault !== undefined
                                        ? addr.isDefault
                                        : existingAddress.isDefault,
                            },
                            { transaction },
                        )
                    } else {
                        // Address id given but not found or mismatched userId, create new address anyway
                        await UserAddress.create(
                            {
                                userId,
                                name: addr.name,
                                addressLine1: addr.addressLine1,
                                city: addr.city,
                                state: addr.state,
                                country: addr.country,
                                pincode: addr.pincode,
                                phone: addr.phone,
                                isDefault: addr.isDefault || false,
                            },
                            { transaction },
                        )
                    }
                } else {
                    // Create new address
                    await UserAddress.create(
                        {
                            userId,
                            name: addr.name,
                            addressLine1: addr.addressLine1,
                            city: addr.city,
                            state: addr.state,
                            country: addr.country,
                            pincode: addr.pincode,
                            phone: addr.phone,
                            isDefault: addr.isDefault || false,
                        },
                        { transaction },
                    )
                }
            }

            await transaction.commit()

            return {
                response: encryptPayload({
                    userId,
                    message:
                        'User and addresses saved or updated successfully.',
                }),
            }
        } catch (error) {
            await transaction.rollback()
            const cleanMessage =
                'Error in saveUser: ' +
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
                        error: 'Failed to save or update user. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('send-ad-emails')
    async sendAdCampaignEmails(@Body() body: { request: string }) {
        try {
            // Decrypt body to get adCampaign id and token
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody

            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'AdCampaign id and token are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Authenticate admin using token from decrypted body
            try {
                jwt.verify(token, JWT_SECRET)
            } catch (err) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid or expired token.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            // Check if token exists in DB and is not expired
            const session = await UserSession.findOne({
                where: {
                    token,
                    isExpired: false,
                },
            })

            if (!session) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Session not found or expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Fetch user and verify admin role
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
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            const roles = user.toJSON().roles || []
            const isAdmin = roles.some((role: any) => role.id === 1)
            if (!isAdmin) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Access denied. Admin role required.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Fetch AdCampaign by id including users
            const adCampaign = await AdCampaign.findByPk(id, {
                include: [
                    {
                        model: User,
                        as: 'users',
                        through: { attributes: [] },
                        attributes: ['id', 'email', 'name'],
                    },
                ],
            })

            if (!adCampaign) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'AdCampaign not found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            const { subject, message, imagePath, imageURL } =
                adCampaign.toJSON()
            // Send emails to all users in the campaign
            const users = adCampaign.toJSON().users || []

            // For each user, send email (async)
            const emailPromises = users.map((user: any) => {
                return this.appService.sendMail({
                    to: user.email,
                    subject: subject || 'Ad Campaign',
                    template: 'ad-campaign',
                    data: {
                        logo: 'https://renushomefoods.com/static/logo.png',
                        userName: user.name,
                        message,
                        campaignImage:
                            process.env.WEB_HOST + '/static' + imagePath,
                        imageURL,
                    },
                })
            })

            await Promise.all(emailPromises)

            return {
                response: encryptPayload({
                    message: `Emails sent successfully to ${users.length} users.`,
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in sendAdCampaignEmails: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to send ad campaign emails. ' +
                            errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('export-data')
    async exportExcelData(
        @Body() body: { request: string },
        @Headers() headers: Record<string, string>,
        @Res() res: Response,
    ) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Decrypt request to extract filters
            const filters = decryptPayload(body.request)
            const {
                fromDate,
                toDate,
                orderStatus,
                category,
                product,
                name,
                phone,
            } = filters

            // Adjust dates to be timezone agnostic and filter by date only
            let adjustedFromDate = fromDate
            let adjustedToDate = toDate
            if (fromDate) {
                adjustedFromDate = new Date(fromDate + 'T00:00:00.000Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }
            if (toDate) {
                adjustedToDate = new Date(toDate + 'T23:59:59.999Z')
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ')
            }

            // Call fetch-orders API internally
            const ordersResults = await sequelize.query(
                'CALL GetOrders(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)',
                {
                    replacements: {
                        fromDate: adjustedFromDate || null,
                        toDate: adjustedToDate || null,
                        orderStatus: orderStatus || null,
                        category: category || null,
                        product: product || null,
                        name: name || null,
                        phone: phone || null,
                    },
                },
            )

            // Process orders data similar to fetchOrders method
            const ordersMap: { [key: number]: any } = {}
            ;(ordersResults as any[]).forEach((row: any) => {
                const orderId = row.orderId
                if (!ordersMap[orderId]) {
                    ordersMap[orderId] = {
                        orderId: row.orderId,
                        userId: row.userId,
                        userAddressId: row.userAddressId,
                        cartId: row.cartId,
                        orderDate: row.orderDate,
                        orderStatus: row.orderStatus,
                        shippingMethod: row.shippingMethod,
                        paymentMethod: row.paymentMethod,
                        expectedDeliveryDate: row.expectedDeliveryDate,
                        deliveryName: row.deliveryName,
                        addressLine1: row.addressLine1,
                        city: row.city,
                        state: row.state,
                        country: row.country,
                        pincode: row.pincode,
                        deliveryPhone: row.deliveryPhone,
                        customerName: row.customerName,
                        customerPhone: row.customerPhone,
                        customerEmail: row.customerEmail,
                        notes: row.notes,
                        deliveryNote: row.deliveryNote,
                        products: [],
                        shippingDiscount: row.shippingDiscount,
                        couponCode: row.couponCode,
                        productDiscount: row.productDiscount,
                    }
                }
                ordersMap[orderId].products.push({
                    quantity: row.quantity,
                    productName: row.productName,
                    price: row.price,
                    categoryName: row.categoryName,
                    productTotal: row.productTotal,
                    priceListId: row.priceListId,
                    productDiscount: row.productDiscount,
                })
            })
            const orders = Object.values(ordersMap)

            // Calculate orderTotal for each order
            orders.forEach((order: any) => {
                const orderTotal = order.products.reduce(
                    (sum: number, product: any) =>
                        sum + (product?.productTotal || 0),
                    0,
                )
                const productDiscount = order.products.reduce(
                    (sum: number, product: any) =>
                        sum + (product?.productDiscount || 0),
                    0,
                )
                order.orderTotal = orderTotal
                order.productDiscount = productDiscount
            })

            // Call chart-data API internally for each chart type
            const chartTypes = [
                'Total Sales by Category',
                'Total Sales by Product',
                'Total Sales by Order Status',
                'Products with Quantities by Order Status',
            ]
            const chartTypeKeyMap = {}

            const chartData: any = {}

            // Call stored procedure for each chart type
            for (const chartType of chartTypes) {
                const results = await sequelize.query(
                    'CALL getChartData(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone, :chartType)',
                    {
                        replacements: {
                            fromDate: adjustedFromDate || null,
                            toDate: adjustedToDate || null,
                            orderStatus: orderStatus || null,
                            category: category || null,
                            product: product || null,
                            name: name || null,
                            phone: phone || null,
                            chartType,
                        },
                    },
                )

                let processedResults: any = results

                // Special processing for 'Products with Quantities by Order Status'
                if (chartType === 'Products with Quantities by Order Status') {
                    const productMap: {
                        [key: string]: {
                            pendingQuantity: number
                            fulfilledQuantity: number
                        }
                    } = {}
                    ;(results as any[]).forEach((row: any) => {
                        const product =
                            row.product ||
                            row.Product ||
                            row.productName ||
                            row.ProductName

                        if (!productMap[product]) {
                            productMap[product] = {
                                pendingQuantity: 0,
                                fulfilledQuantity: 0,
                            }
                        }

                        productMap[product].pendingQuantity +=
                            Number(row.pendingQuantity) ?? 0
                        productMap[product].fulfilledQuantity +=
                            Number(row.fulfilledQuantity) ?? 0
                    })

                    processedResults = Object.entries(productMap).map(
                        ([product, quantities]) => ({
                            product,
                            pendingQuantity: quantities.pendingQuantity,
                            fulfilledQuantity: quantities.fulfilledQuantity,
                        }),
                    )
                }

                // Map chart type to key in response
                const key = chartType
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .replace(/[^a-zA-Z0-9]/g, '')
                chartData[key] = processedResults
                chartTypeKeyMap[key] = chartType
            }

            // Create Excel workbook
            const workbook = new ExcelJS.Workbook()
            workbook.creator = 'Renu Home Foods Admin'
            workbook.created = new Date()

            // Create Orders sheet
            const ordersSheet = workbook.addWorksheet('Orders')

            // Define orders sheet columns
            ordersSheet.columns = [
                { header: 'Order ID', key: 'orderId', width: 10 },
                { header: 'Order Date', key: 'orderDate', width: 20 },
                { header: 'Order Status', key: 'orderStatus', width: 15 },
                { header: 'Customer Name', key: 'customerName', width: 20 },
                { header: 'Customer Phone', key: 'customerPhone', width: 15 },
                { header: 'Customer Email', key: 'customerEmail', width: 25 },
                {
                    header: 'Delivery Address',
                    key: 'deliveryAddress',
                    width: 30,
                },
                { header: 'City', key: 'city', width: 15 },
                { header: 'State', key: 'state', width: 15 },
                { header: 'Pincode', key: 'pincode', width: 10 },
                { header: 'Payment Method', key: 'paymentMethod', width: 15 },
                { header: 'Shipping Method', key: 'shippingMethod', width: 15 },
                {
                    header: 'Expected Delivery',
                    key: 'expectedDeliveryDate',
                    width: 20,
                },
                { header: 'Products', key: 'products', width: 40 },
                { header: 'Order Total', key: 'orderTotal', width: 12 },
                {
                    header: 'Product Discount',
                    key: 'productDiscount',
                    width: 15,
                },
                {
                    header: 'Shipping Discount',
                    key: 'shippingDiscount',
                    width: 15,
                },
                { header: 'Coupon Code', key: 'couponCode', width: 15 },
                { header: 'Notes', key: 'notes', width: 30 },
            ]

            // Style the header row
            ordersSheet.getRow(1).font = { bold: true }
            ordersSheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE0E0E0' },
            }

            // Add orders data
            orders.forEach((order: any) => {
                const productsText = order.products
                    .map(
                        (p: any) =>
                            `${p.productName} (${p.quantity}x ₹${p.price})`,
                    )
                    .join(', ')

                const deliveryAddress = `${order.deliveryName}, ${order.addressLine1}`

                ordersSheet.addRow({
                    orderId: order.orderId,
                    orderDate: new Date(order.orderDate).toLocaleDateString(),
                    orderStatus: order.orderStatus,
                    customerName: order.customerName,
                    customerPhone: order.customerPhone,
                    customerEmail: order.customerEmail,
                    deliveryAddress: deliveryAddress,
                    city: order.city,
                    state: order.state,
                    pincode: order.pincode,
                    paymentMethod: order.paymentMethod,
                    shippingMethod: order.shippingMethod,
                    expectedDeliveryDate: new Date(
                        order.expectedDeliveryDate,
                    ).toLocaleDateString(),
                    products: productsText,
                    orderTotal: `₹${order.orderTotal.toFixed(2)}`,
                    productDiscount: `₹${order.productDiscount.toFixed(2)}`,
                    shippingDiscount: `₹${(order.shippingDiscount || 0).toFixed(2)}`,
                    couponCode: order.couponCode || '',
                    notes: order.notes || '',
                })
            })

            // Create Chart Data sheet
            const chartSheet = workbook.addWorksheet('Chart Data')

            // Define chart data columns
            chartSheet.columns = [
                { header: 'Chart Type', key: 'chartType', width: 40 },
                { header: 'Category/Product', key: 'category', width: 25 },
                { header: 'Total Sales', key: 'value', width: 25 },
                { header: 'Percentage', key: 'percentage', width: 30 },
            ]

            // Style the header row
            chartSheet.getRow(1).font = { bold: true }
            chartSheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE0E0E0' },
            }

            // Add chart data
            Object.entries(chartData).forEach(
                ([chartKey, chartValues]: [string, any]) => {
                    if (Array.isArray(chartValues)) {
                        const totalChartValue = chartValues.reduce(
                            (total: number, item: any) => {
                                if (item.totalSales) {
                                    return total + Number(item.totalSales)
                                }
                                return total
                            },
                            0,
                        )
                        chartValues.forEach((value: any) => {
                            if (
                                chartKey ===
                                'productswithquantitiesbyorderstatus'
                            ) {
                                const totalQuantity =
                                    value.pendingQuantity +
                                    value.fulfilledQuantity
                                const pendingPercent =
                                    (value.pendingQuantity / totalQuantity) *
                                    100
                                const fulfilledPercent =
                                    (value.fulfilledQuantity / totalQuantity) *
                                    100
                                const percentage =
                                    pendingPercent.toFixed(2) +
                                    '% Pending, ' +
                                    fulfilledPercent.toFixed(2) +
                                    '% Fulfilled'
                                chartSheet.addRow({
                                    chartType: chartTypeKeyMap[chartKey],
                                    category: value.product,
                                    value: `Pending: ${value.pendingQuantity}, Fulfilled: ${value.fulfilledQuantity}`,
                                    percentage: percentage,
                                })
                            } else {
                                // For other chart types, determine the structure
                                const category =
                                    value.category ||
                                    value.product ||
                                    value.name ||
                                    value.orderStatus
                                const chartValue =
                                    value.totalSales ||
                                    value.quantity ||
                                    value.count ||
                                    0
                                chartSheet.addRow({
                                    chartType: chartTypeKeyMap[chartKey],
                                    category: category,
                                    value:
                                        typeof chartValue === 'number'
                                            ? '₹' + chartValue.toFixed(2)
                                            : chartValue,
                                    percentage:
                                        chartValue && totalChartValue
                                            ? (
                                                  (chartValue /
                                                      totalChartValue) *
                                                  100
                                              ).toFixed(2) + '%'
                                            : 0 + '%',
                                })
                            }
                        })
                    }
                },
            )

            // Auto-fit columns for both sheets
            ordersSheet.columns.forEach((column) => {
                column.width = Math.min(column.width || 10, 50) // Max width of 50
            })
            chartSheet.columns.forEach((column) => {
                column.width = Math.min(column.width || 10, 50) // Max width of 50
            })

            // Set response headers
            const fileName = `renus-home-foods-data-${new Date().toISOString().split('T')[0]}.xlsx`
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            )
            res.setHeader(
                'Content-Disposition',
                `attachment; filename="${fileName}"`,
            )

            // Write workbook to response
            await workbook.xlsx.write(res)
            res.end()
        } catch (error) {
            const cleanMessage =
                'Error in exportExcelData: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack

            logger.error(err)
            if (error instanceof HttpException) {
                throw error
            }
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to export Excel data. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}
