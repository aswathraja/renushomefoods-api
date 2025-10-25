import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Query,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import * as sequelize from 'sequelize'
import { Op } from 'sequelize'
import { AppService } from './app.service'
import {
    Cart,
    CartProduct,
    Category,
    Order,
    PriceList,
    Product,
    ProductImage,
    User,
    UserAddress,
    UserSession,
} from './models'
import { decryptPayload, encryptPayload } from './utils'

@Controller('order')
export class OrderController {
    constructor(private appService: AppService) {}

    @Post('get-order-details')
    async getOrderDetails(@Body() body: any) {
        try {
            // Assuming decryption function exists, similar to encryptPayload
            const decryptedBody = decryptPayload(body.request)
            // For now, assuming body.request is already decrypted or adjust accordingly
            const { id, phone } = decryptedBody // Adjust if decryption is needed

            if (!id || !phone) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order ID and Phone are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Find order with all associations
            const order = await Order.findByPk(id, {
                include: [
                    { model: User, as: 'user' },
                    { model: UserAddress },
                    {
                        model: Cart,
                        include: [
                            {
                                model: CartProduct,
                                include: [
                                    {
                                        model: Product,
                                        include: [ProductImage, Category],
                                    },
                                    PriceList,
                                ],
                            },
                        ],
                    },
                ],
            })

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

            // Verify phone matches user's phone
            if (order.toJSON().user?.phone !== phone) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Phone number does not match the order.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            const orderJSON = order.toJSON()

            // Format products from cart
            let products: any[] = []
            const cart = orderJSON.Cart
            if (cart && cart.CartProducts) {
                products = cart.CartProducts.map((cp: any) => ({
                    productId: cp.productId,
                    name: cp.Product?.name,
                    tagline: cp.Product?.tagline,
                    image: cp.Product?.ProductImages?.[0]?.fileName,
                    category: cp.Product?.Category?.category,
                    priceList: cp.PriceList
                        ? {
                              id: cp.PriceList.id,
                              weight: cp.PriceList.weight,
                              unitprice: cp.PriceList.unitprice,
                              productid: cp.PriceList.productid,
                          }
                        : undefined,
                    quantity: cp.quantity,
                }))
            }

            // Format order object
            const address = orderJSON.UserAddress
            const user = orderJSON.user
            const orderObj = {
                id: orderJSON.id,
                name: address?.name,
                address: address?.addressLine1,
                city: address?.city,
                state: address?.state,
                pincode: address?.pincode,
                mobile: address?.phone,
                email: user?.email,
                notes: orderJSON.notes,
                shippingMethod: orderJSON.shippingMethod,
                paymentMethod: orderJSON.paymentMethod,
                cartId: orderJSON.cartId,
                status: orderJSON.status,
                orderedDate: orderJSON.orderedDate,
                expectedDeliveryDate: orderJSON.expectedDeliveryDate,
            }
            const encryptedResponse = {
                response: encryptPayload({
                    cartId: cart?.id,
                    order: orderObj,
                    products,
                }),
            }
            return encryptedResponse
        } catch (error) {
            console.error('Error in getOrderDetails:', error)
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch order details. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('pending-order')
    async getPendingOrder(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            if (!decryptedBody.token) {
                return {
                    response: encryptPayload({
                        message:
                            'Please login to get your items from your saved cart',
                    }),
                }
            }
            // Find user session by token
            const userSession = await UserSession.findOne({
                where: { token: decryptedBody.token, isExpired: false },
            })
            if (!userSession) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid or expired token.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }
            const userId = userSession.toJSON().userId
            // Find the pending cart with all details
            const pendingCart = await Cart.findOne({
                where: {
                    userId,
                    status: 'created',
                },
                include: [
                    {
                        model: CartProduct,
                        include: [
                            {
                                model: Product,
                                include: [ProductImage, Category],
                            },
                            PriceList,
                        ],
                    },
                ],
                order: [['id', 'DESC']],
            })
            if (!pendingCart) {
                return {
                    response: encryptPayload({
                        message: 'No pending cart found for this user.',
                    }),
                }
            }
            let products: any[] = []
            const cartJSON = pendingCart.toJSON() as any
            if (cartJSON && cartJSON.CartProducts) {
                products = cartJSON.CartProducts.map((cp: any) => ({
                    productId: cp.productId,
                    name: cp.Product?.name,
                    tagline: cp.Product?.tagline,
                    image: cp.Product?.ProductImages[0]?.fileName,
                    category: cp.Product?.Category?.category,
                    priceList: cp.PriceList
                        ? {
                              id: cp.PriceList.id,
                              weight: cp.PriceList.weight,
                              unitprice: cp.PriceList.unitprice,
                              productid: cp.PriceList.productid,
                          }
                        : undefined,
                    quantity: cp.quantity,
                }))
            }

            const encryptedResponse = {
                response: encryptPayload({
                    cartId: cartJSON.id,
                    products,
                }),
            }
            return encryptedResponse
        } catch (error) {
            console.error('Error in getPendingOrder:', error)
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch pending order. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('save-cart')
    async saveOrUpdateCart(@Body() body: any) {
        try {
            const {
                id,
                products,
                createdBy,
                updatedBy,
                status,
                mobile,
                email,
                name,
                token,
            } = decryptPayload(body.request)
            const productsArray = Array.isArray(products) ? products : []
            let cart
            let user
            const normalizePhone = (num: string) =>
                num.replace(/^\+\d{1,2}|\s+/g, '')
            const normalizedPhone = normalizePhone(mobile)
            if (token) {
                // Verify token and find user from session
                jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
                const session = await UserSession.findOne({
                    where: {
                        token,
                        isExpired: false,
                    },
                })
                if (session) {
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
                    user = await User.findByPk(session.toJSON().userId)
                }
            }
            if (!user) {
                // Find user by phone or email

                const whereConditions: any = {
                    [Op.or]: [
                        { username: normalizedPhone },
                        { email: email || '' },
                        sequelize.where(
                            sequelize.fn(
                                'RIGHT',
                                sequelize.fn(
                                    'REPLACE',
                                    sequelize.fn(
                                        'REPLACE',
                                        sequelize.fn(
                                            'REPLACE',
                                            sequelize.col('phone'),
                                            ' ',
                                            '',
                                        ),
                                        '+',
                                        '',
                                    ),
                                    '-',
                                    '', // optionally handle dashes if any
                                ),
                                10,
                            ),
                            normalizedPhone, // last 10 digits of input
                        ),
                    ],
                }
                // Run a single query that checks for any of the fields
                const existingUsers = await User.findAll({
                    where: whereConditions,
                })
                if (existingUsers.length > 0) {
                    user = existingUsers[0]
                }
            }
            if (!user) {
                // Create new user
                const otp = this.appService.generateRandomNumber(4)
                user = await User.create({
                    name: name || 'User',
                    username: normalizedPhone,
                    email: email || '', // No email in order
                    phone: normalizedPhone,
                    password: '', // Assuming password is set later or not required
                    otp,
                })

                user = await User.findOne({
                    where: {
                        name: name || 'User',
                        username: normalizedPhone,
                        email: email || '', // No email in order
                        phone: normalizedPhone,
                        password: '',
                    },
                })
            }
            if (id) {
                cart = await Cart.findByPk(id)
                if (!cart) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Cart not found',
                            }),
                        },
                        HttpStatus.NOT_ACCEPTABLE,
                    )
                }
                await cart.update({
                    userId: user.toJSON().id,
                    updatedBy,
                    updatedAt: new Date(),
                    status: status || 'Created',
                })
                // Get existing CartProducts for this cart
                const existingCartProducts = await CartProduct.findAll({
                    where: { cartId: cart.id },
                })
                const productIdsInRequest = productsArray.map(
                    (p) => p.productId,
                )
                // Update or create CartProducts
                for (const prod of productsArray) {
                    const existing = existingCartProducts.find(
                        (cp) => cp.toJSON().productId === prod.productId,
                    )
                    if (existing) {
                        await existing.update({
                            priceListId: prod.priceList.id,
                            quantity: prod.quantity,
                        })
                    } else {
                        await CartProduct.create({
                            cartId: cart.id,
                            productId: prod.productId,
                            priceListId: prod.priceList.id,
                            quantity: prod.quantity,
                        })
                    }
                }
                // Delete CartProducts not in the request
                for (const existing of existingCartProducts) {
                    if (
                        !productIdsInRequest.includes(
                            existing.toJSON().productId,
                        )
                    ) {
                        await existing.destroy()
                    }
                }
            } else {
                cart = await Cart.create({
                    userId: user.toJSON().id,
                    createdBy,
                    updatedBy: createdBy,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    status: 'Created',
                })
                const createdProdcts = []
                // Create CartProducts
                for (const prod of productsArray) {
                    const createdProduct = await CartProduct.create({
                        cartId: cart.id,
                        productId: prod.productId,
                        priceListId: prod.priceList.id,
                        quantity: prod.quantity,
                    })
                    createdProdcts.push(createdProduct)
                }
            }
            const encryptedResponse = {
                response: encryptPayload(cart),
            }
            return encryptedResponse
        } catch (error) {
            console.error('Error in saveOrUpdateCart:', error)
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to save or update cart. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('get-cart')
    async getCartByCreatedBy(@Query('name') name: string) {
        try {
            if (!name) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Name is required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }
            const cart = await Cart.findOne({
                where: {
                    createdBy: name,
                    status: 'Created',
                },
                include: [Product, PriceList],
            })
            const encryptedResponse = {
                response: encryptPayload(cart),
            }
            return encryptedResponse
        } catch (error) {
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch cart. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('place-order')
    async saveOrUpdateOrder(@Body() body: any) {
        try {
            const {
                id,
                userAddressId,
                notes,
                shippingMethod,
                paymentMethod,
                cartId,
                status,
                mobile, // for finding/creating user
                name, // recipient name for address
                address, // addressLine1
                city,
                state,
                pincode,
                country,
                phone, // phone for address
                token,
                email,
                username,
            } = decryptPayload(body.request)

            // Normalize phone number: remove spaces and leading "+"
            const normalizePhone = (num: string) =>
                num.replace(/^\+\d{1,2}|\s+/g, '')

            const normalizedPhone = normalizePhone(mobile)

            // Find or create user based on mobile or token
            let user
            if (token) {
                // Verify token and find user from session
                jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
                const session = await UserSession.findOne({
                    where: {
                        token,
                        isExpired: false,
                    },
                })
                if (session) {
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
                    user = await User.findByPk(session.toJSON().userId)
                }
            }
            if (!user) {
                // Normalize phone number: remove spaces and leading "+"
                const normalizePhone = (num: string) =>
                    num.replace(/^\+\d{1,2}|\s+/g, '')

                const normalizedPhone = normalizePhone(mobile)

                const whereConditions: any = {
                    [Op.or]: [
                        { username: normalizedPhone },
                        { email: email || '' },
                        sequelize.where(
                            sequelize.fn(
                                'RIGHT',
                                sequelize.fn(
                                    'REPLACE',
                                    sequelize.fn(
                                        'REPLACE',
                                        sequelize.fn(
                                            'REPLACE',
                                            sequelize.col('phone'),
                                            ' ',
                                            '',
                                        ),
                                        '+',
                                        '',
                                    ),
                                    '-',
                                    '', // optionally handle dashes if any
                                ),
                                10,
                            ),
                            normalizedPhone, // last 10 digits of input
                        ),
                    ],
                }
                // Run a single query that checks for any of the fields
                const existingUsers = await User.findAll({
                    where: whereConditions,
                })
                if (existingUsers.length > 0) {
                    user = existingUsers[0]
                }
            }
            if (!user) {
                const otp = this.appService.generateRandomNumber(4)
                // Create new user
                user = await User.create({
                    name: name || 'Unknown',
                    username: normalizedPhone,
                    email: email, // No email in order
                    phone: normalizedPhone,
                    password: '', // Assuming password is set later or not required
                    otp,
                })
                user = await User.findOne({
                    where: {
                        name: name || 'User',
                        email: email || '', // No email in order
                        phone: normalizedPhone,
                    },
                })
            }

            // Find or create user address
            let userAddress
            if (userAddressId || user.toJSON().id) {
                userAddress = await UserAddress.findOne({
                    where: {
                        [Op.or]: {
                            id: userAddressId,
                            userId: user.toJSON().id,
                            isDefault: true,
                        },
                    },
                })
                if (!userAddress) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'User Address not found',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }
            } else {
                // Create new address
                userAddress = await UserAddress.create({
                    userId: user.toJSON().id,
                    name: name,
                    addressLine1: address,
                    city: city,
                    state: state,
                    country: country, // Assuming default
                    pincode: pincode,
                    phone: phone || mobile,
                    isDefault: true,
                })

                userAddress = await UserAddress.findOne({
                    where: {
                        userId: user.toJSON().id,
                        name: name,
                        addressLine1: address,
                        city: city,
                        state: state,
                        country: country, // Assuming default
                        pincode: pincode,
                        phone: phone || mobile,
                        isDefault: true,
                    },
                })
            }

            let order
            if (Boolean(user?.toJSON()?.id) === false) {
                user = await User.findOne({
                    where: {
                        name: name || 'Unknown',
                        username: normalizedPhone,
                        email: email, // No email in order
                        phone: normalizedPhone,
                        password: '',
                    },
                })
            }
            if (id) {
                order = await Order.findByPk(id)
                if (!order) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Order not found',
                            }),
                        },
                        HttpStatus.NOT_ACCEPTABLE,
                    )
                }
                await order.update({
                    userId: user.toJSON().id,
                    userAddressId: userAddress?.toJSON().id,
                    notes,
                    shippingMethod,
                    paymentMethod,
                    cartId,
                    status: status || 'Ordered',
                })
            } else {
                order = await Order.create({
                    userId: user.toJSON().id,
                    userAddressId: userAddress?.toJSON().id,
                    notes,
                    shippingMethod,
                    paymentMethod,
                    cartId,
                    status: status || 'Ordered',
                })
                await order.reload() // Ensure the instance is reloaded with the generated id
            }
            const encryptedResponse = {
                response: encryptPayload(order),
            }
            return encryptedResponse
        } catch (error) {
            console.error('Error in saveOrUpdateOrder:', error)
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to save or update order. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('get-order-by-id')
    async getOrderById(@Query('id') id: string) {
        try {
            if (!id) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order id is required',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }
            const order = await Order.findByPk(id, { include: [Cart] })
            if (!order) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order not found',
                        }),
                    },
                    HttpStatus.NOT_ACCEPTABLE,
                )
            }
            const encryptedResponse = {
                response: encryptPayload(order),
            }
            return encryptedResponse
        } catch (error) {
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch order. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
    @Post('get-user-orders')
    async getUserOrders(@Body() body: any) {
        try {
            const { token } = decryptPayload(body.request)

            if (!token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token is required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Find user session by token
            const userSession = await UserSession.findOne({
                where: { token, isExpired: false },
            })

            if (!userSession) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid or expired token.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            const userId = userSession.toJSON().userId

            // Find all orders for the user with all associations
            const orders = await Order.findAll({
                where: { userId },
                include: [
                    { model: User, as: 'user' },
                    { model: UserAddress },
                    {
                        model: Cart,
                        include: [
                            {
                                model: CartProduct,
                                include: [
                                    {
                                        model: Product,
                                        include: [ProductImage, Category],
                                    },
                                    PriceList,
                                ],
                            },
                        ],
                    },
                ],
                order: [['id', 'DESC']],
            })

            // Format each order
            const formattedOrders = orders.map((order) => {
                const orderJSON = order.toJSON()

                // Format products from cart
                let products: any[] = []
                const cart = orderJSON.Cart
                if (cart && cart.CartProducts) {
                    products = cart.CartProducts.map((cp: any) => ({
                        productId: cp.productId,
                        name: cp.Product?.name,
                        tagline: cp.Product?.tagline,
                        image: cp.Product?.ProductImages?.[0]?.fileName,
                        category: cp.Product?.Category?.category,
                        priceList: cp.PriceList
                            ? {
                                  id: cp.PriceList.id,
                                  weight: cp.PriceList.weight,
                                  unitprice: cp.PriceList.unitprice,
                                  productid: cp.PriceList.productid,
                              }
                            : undefined,
                        quantity: cp.quantity,
                    }))
                }

                // Format order object
                const address = orderJSON.UserAddress
                const user = orderJSON.user
                const orderObj = {
                    id: orderJSON.id,
                    name: address?.name,
                    address: address?.addressLine1,
                    city: address?.city,
                    state: address?.state,
                    pincode: address?.pincode,
                    mobile: address?.phone,
                    email: user?.email,
                    notes: orderJSON.notes,
                    shippingMethod: orderJSON.shippingMethod,
                    paymentMethod: orderJSON.paymentMethod,
                    cartId: orderJSON.cartId,
                    status: orderJSON.status,
                    orderedDate: orderJSON.orderedDate,
                    expectedDeliveryDate: orderJSON.expectedDeliveryDate,
                }

                return {
                    cartId: cart?.id,
                    order: orderObj,
                    products,
                }
            })

            const encryptedResponse = {
                response: encryptPayload({ orders: formattedOrders }),
            }
            return encryptedResponse
        } catch (error) {
            console.error('Error in getUserOrders:', error)
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to fetch user orders. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}
