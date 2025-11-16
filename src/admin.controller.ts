import {
    Body,
    Controller,
    Get,
    Headers,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { Op } from 'sequelize'
import { AppService } from './app.service'
import { sequelize } from './db'
import { logger } from './logger'
import {
    Cart,
    CartProduct,
    Order,
    PriceList,
    Product,
    Role,
    User,
    UserAddress,
    UserRole,
    UserSession,
} from './models'
import { decryptPayload, encryptPayload } from './utils'

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

        // Verify JWT token validity
        jwt.verify(token, JWT_SECRET)

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
                    }
                }
                ordersMap[orderId].products.push({
                    quantity: row.quantity,
                    productName: row.productName,
                    price: row.price,
                    categoryName: row.categoryName,
                    productTotal: row.productTotal,
                    priceListId: row.priceListId,
                })
            })
            const orders = Object.values(ordersMap)

            // Calculate orderTotal for each order
            orders.forEach((order: any) => {
                const orderTotal = order.products.reduce(
                    (sum: number, product: any) =>
                        sum + (product.productTotal || 0),
                    0,
                )
                order.orderTotal = orderTotal
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

    @Post('user-address')
    async getUserAddress(
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
                'Error in getUserAddress: ' +
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
                        error: 'Failed to fetch user address. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('create-or-update-order')
    async createOrUpdateOrder(
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
                const priceList = (dbProduct as any).PriceLists.find(
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
                        cp.productId === (dbProduct as any).id &&
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
                        productId: (dbProduct as any).id,
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
                        existing.toJSON().Product.name,
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
                isNewOrder = true
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
                    subject: isNewOrder
                        ? "Your Order Invoice - Renu's Home Foods"
                        : isProductsModified
                          ? "Your Updated Order Invoice - Renu's Home Foods"
                          : '',
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })

                // Send order invoice email to user
                await this.appService.sendMail({
                    to: process.env.SMTP_USER,
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
}
