import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Query,
    Res,
} from '@nestjs/common'
import type { Response } from 'express'
import * as jwt from 'jsonwebtoken'
import * as sequelize from 'sequelize'
import { sequelize as Sequelize } from './db'

import { Op } from 'sequelize'
import { AppService } from './app.service'
import { logger } from './logger'
import {
    Cart,
    CartProduct,
    Category,
    CouponCode,
    CouponDiscounts,
    CouponProducts,
    Order,
    OrderCoupon,
    PriceList,
    Product,
    ProductImage,
    Role,
    User,
    UserAddress,
    UserRole,
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
                    {
                        model: OrderCoupon,
                        as: 'OrderCoupons',
                        include: [
                            {
                                model: CouponCode,
                                as: 'CouponCode',
                                include: [
                                    {
                                        model: CouponDiscounts,
                                        as: 'CouponDiscounts',
                                    },
                                    {
                                        model: CouponProducts,
                                        as: 'CouponProducts',
                                        include: [
                                            {
                                                model: Product,
                                                as: 'Product',
                                            },
                                        ],
                                    },
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

            // Calculate subtotal
            const subtotal = orderJSON.Cart.CartProducts.reduce(
                (sum, cartProduct) =>
                    sum +
                    cartProduct.quantity * cartProduct.PriceList.unitprice,
                0,
            )

            // Calculate coupon discount
            let totalDiscount = 0
            let shippingDiscount = 0
            const orderCoupons = orderJSON.OrderCoupons
            if (orderCoupons && orderCoupons.length > 0) {
                const orderCoupon = orderCoupons[0] // Assuming one coupon per order
                const couponDiscounts = orderCoupon.CouponCode.CouponDiscounts
                const couponProducts = orderCoupon.CouponCode.CouponProducts

                // Get applicable products
                const applicableProductIds = couponProducts.map(
                    (cp) => cp.productId,
                )

                couponDiscounts.forEach((discount) => {
                    let discountAmount = 0
                    if (applicableProductIds.length === 0) {
                        // Applies to all products
                        if (discount.flatrate) {
                            discountAmount = discount.discount
                        } else {
                            discountAmount =
                                subtotal * (discount.discount / 100)
                        }
                    } else {
                        // Applies to specific products
                        const applicableSubtotal =
                            orderJSON.Cart.CartProducts.filter((cp) =>
                                applicableProductIds.includes(cp.productId),
                            ).reduce(
                                (sum, cartProduct) =>
                                    sum +
                                    cartProduct.quantity *
                                        cartProduct.PriceList.unitprice,
                                0,
                            )
                        if (discount.flatrate) {
                            discountAmount = orderJSON.Cart.CartProducts.filter(
                                (cp) =>
                                    applicableProductIds.includes(cp.productId),
                            ).reduce(
                                (sum, cp) =>
                                    sum +
                                    (cp.PriceList.unitprice -
                                        discount.discount) *
                                        cp.quantity,
                                0,
                            )
                            if (
                                discount.name === 'Shipping' &&
                                discount.flatrate
                            ) {
                                shippingDiscount = 99 - discount.discount
                            } else if (
                                discount.name === 'Shipping' &&
                                discount.flatrate === false
                            ) {
                                shippingDiscount =
                                    99 - 99 * (discount.discount / 100)
                            }
                        } else {
                            discountAmount =
                                applicableSubtotal * (discount.discount / 100)
                        }

                        if (discount.name === 'Shipping' && discount.flatrate) {
                            shippingDiscount = 99 - discount.discount
                        } else if (
                            discount.name === 'Shipping' &&
                            discount.flatrate === false
                        ) {
                            shippingDiscount = 99 * (discount.discount / 100)
                        }
                    }
                    if (discount.name !== 'Shipping') {
                        totalDiscount += discountAmount
                    }
                })
            }

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
            const couponCode =
                orderCoupons.length > 0
                    ? orderCoupons[0]?.CouponCode?.code
                    : undefined
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
                deliveryNote: orderJSON.deliveryNote,
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
                    totalDiscount,
                    shippingDiscount,
                    couponCode,
                }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in getOrderDetails: ' +
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
            const cleanMessage =
                'Error in getPendingOrder: ' +
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
            const cleanMessage =
                'Error in saveOrUpdateCart: ' +
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
                deliveryNote,
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
                couponId,
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
                    deliveryNote: deliveryNote || '',
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
                    deliveryNote: deliveryNote || '',
                    shippingMethod,
                    paymentMethod,
                    cartId,
                    status: status || 'Ordered',
                })
                await order.reload() // Ensure the instance is reloaded with the generated id
            }

            // Handle couponId: save or update in OrderCoupon table
            if (couponId) {
                const existingOrderCoupon = await OrderCoupon.findOne({
                    where: { orderId: order.toJSON().id },
                })
                if (existingOrderCoupon) {
                    await existingOrderCoupon.update({ couponCodeId: couponId })
                } else {
                    await OrderCoupon.create({
                        orderId: order.toJSON().id,
                        couponCodeId: couponId,
                    })
                }
            }

            const orderInvoiceData = await this.appService.getOrderInvoiceData(
                order.toJSON().id,
                'Thank you for placing your order. Please find the invoice below.',
            )
            if (
                (order.paymentMethod === 'UPI' &&
                    status === 'Payment Processed') ||
                (order.paymentMethod !== 'UPI' &&
                    order.toJSON().status === 'Ordered')
            ) {
                // Send order invoice email to user
                await this.appService.sendMail({
                    to: user.toJSON().email,
                    subject: "Your Order Invoice - Renu's Home Foods",
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })

                // Send order invoice email to user
                await this.appService.sendMail({
                    to: process.env.SMTP_USER,
                    subject: `New Order Placed - ${user.toJSON().name} (${user.toJSON().phone})`,
                    template: 'order-invoice',
                    data: orderInvoiceData,
                })
            }

            const encryptedResponse = {
                response: encryptPayload(order),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in saveOrUpdateOrder: ' +
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
            const cleanMessage =
                'Error in getOrderById: ' +
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
                    {
                        model: OrderCoupon,
                        as: 'OrderCoupons',
                        include: [
                            {
                                model: CouponCode,
                                as: 'CouponCode',
                                include: [
                                    {
                                        model: CouponDiscounts,
                                        as: 'CouponDiscounts',
                                    },
                                    {
                                        model: CouponProducts,
                                        as: 'CouponProducts',
                                        include: [
                                            {
                                                model: Product,
                                                as: 'Product',
                                            },
                                        ],
                                    },
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

                // Calculate subtotal
                const subtotal = orderJSON.Cart.CartProducts.reduce(
                    (sum, cartProduct) =>
                        sum +
                        cartProduct.quantity * cartProduct.PriceList.unitprice,
                    0,
                )

                // Calculate coupon discount
                let totalDiscount = 0
                let shippingDiscount = 0
                const orderCoupons = orderJSON.OrderCoupons
                if (orderCoupons && orderCoupons.length > 0) {
                    const orderCoupon = orderCoupons[0] // Assuming one coupon per order
                    const couponDiscounts =
                        orderCoupon.CouponCode.CouponDiscounts
                    const couponProducts = orderCoupon.CouponCode.CouponProducts

                    // Get applicable products
                    const applicableProductIds = couponProducts.map(
                        (cp) => cp.productId,
                    )

                    couponDiscounts.forEach((discount) => {
                        let discountAmount = 0
                        if (applicableProductIds.length === 0) {
                            // Applies to all products
                            if (discount.flatrate) {
                                discountAmount = discount.discount
                            } else {
                                discountAmount =
                                    subtotal * (discount.discount / 100)
                            }
                        } else {
                            // Applies to specific products
                            const applicableSubtotal =
                                orderJSON.Cart.CartProducts.filter((cp) =>
                                    applicableProductIds.includes(cp.productId),
                                ).reduce(
                                    (sum, cartProduct) =>
                                        sum +
                                        cartProduct.quantity *
                                            cartProduct.PriceList.unitprice,
                                    0,
                                )
                            if (discount.flatrate) {
                                discountAmount =
                                    orderJSON.Cart.CartProducts.filter((cp) =>
                                        applicableProductIds.includes(
                                            cp.productId,
                                        ),
                                    ).reduce(
                                        (sum, cp) =>
                                            sum +
                                            (cp.PriceList.unitprice -
                                                discount.discount) *
                                                cp.quantity,
                                        0,
                                    )
                                if (discount.name !== 'Shipping') {
                                    totalDiscount += discountAmount
                                }
                            } else {
                                discountAmount =
                                    applicableSubtotal *
                                    (discount.discount / 100)
                                if (discount.name !== 'Shipping') {
                                    totalDiscount += discountAmount
                                }
                            }
                            if (
                                discount.name === 'Shipping' &&
                                discount.flatrate
                            ) {
                                shippingDiscount = 99 - discount.discount
                            } else if (
                                discount.name === 'Shipping' &&
                                discount.flatrate === false
                            ) {
                                shippingDiscount =
                                    99 - 99 * (discount.discount / 100)
                            }
                        }
                    })
                }

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
                // Format order object
                const couponCode =
                    orderCoupons.length > 0
                        ? orderCoupons[0]?.CouponCode?.code
                        : undefined
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
                    deliveryNote: orderJSON.deliveryNote,
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
                    totalDiscount,
                    shippingDiscount,
                    couponCode,
                }
            })

            const encryptedResponse = {
                response: encryptPayload({ orders: formattedOrders }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in getUserOrders: ' +
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
                        error: 'Failed to fetch user orders. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('cancel-order')
    async cancelOrder(@Body() body: any) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody

            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order ID and Token are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Verify token and find user
            jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
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
            // Check expiry
            if (new Date() > userSession.expiry) {
                await userSession.update({ isExpired: true })
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Session expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            const userId = userSession.toJSON().userId
            const user = await User.findByPk(userId)
            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            // Find order with associations
            const order = await Order.findByPk(id, {
                include: [{ model: User, as: 'user' }, { model: Cart }],
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

            // Check authorization: user owns the order or is admin (roleId 1)
            const orderUserId = order.toJSON().userId
            const isOwner = orderUserId === userId
            const isAdmin = user.toJSON().roleId === 1
            if (!isOwner && !isAdmin) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Unauthorized to cancel this order.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Update order status to 'Cancelled'
            await order.update({ status: 'Cancelled' })

            // Update cart status to 'Cancelled'
            const cart = order.toJSON().Cart
            if (cart) {
                await Cart.update(
                    { status: 'Cancelled' },
                    { where: { id: cart.id } },
                )
            }

            const encryptedResponse = {
                response: encryptPayload({
                    message: 'Order cancelled successfully.',
                    orderId: id,
                }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in cancelOrder: ' +
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
                        error: 'Failed to cancel order. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('reorder')
    async reorder(@Body() body: any) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { id, token } = decryptedBody

            if (!id || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order ID and Token are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Verify token and find user
            jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
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
            // Check expiry
            if (new Date() > userSession.expiry) {
                await userSession.update({ isExpired: true })
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Session expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            const userId = userSession.toJSON().userId
            const user = await User.findByPk(userId)
            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            // Find order with cart and cart products
            const order = await Order.findByPk(id, {
                include: [
                    {
                        model: Cart,
                        include: [
                            {
                                model: CartProduct,
                                include: [PriceList],
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

            // Check authorization: user owns the order or is admin (roleId 1)
            const orderUserId = order.toJSON().userId
            const isOwner = orderUserId === userId
            const isAdmin = user.toJSON().roleId === 1
            if (!isOwner && !isAdmin) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Unauthorized to reorder this order.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            const cart = order.toJSON().Cart
            if (!cart || !cart.CartProducts || cart.CartProducts.length === 0) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'No products found in the order to reorder.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Check if user already has an existing cart
            let existingCart = await Cart.findOne({
                where: {
                    userId,
                    status: 'Created',
                },
                include: [
                    {
                        model: CartProduct,
                        include: [PriceList],
                    },
                ],
            })

            let newCart
            let createdProducts = []
            let updatedProducts = []

            if (existingCart) {
                // Update existing cart
                newCart = existingCart
                await existingCart.update({
                    updatedBy: user.toJSON().name || 'User',
                    updatedAt: new Date(),
                })

                // Get existing cart products for updating quantities
                const existingCartProducts =
                    existingCart.toJSON().CartProducts || []

                // Process each product from the original order
                for (const cp of cart.CartProducts) {
                    const existingProduct = existingCartProducts.find(
                        (ecp: any) =>
                            ecp.productId === cp.productId &&
                            ecp.priceListId === cp.priceListId,
                    )

                    if (existingProduct) {
                        // Update quantity if product already exists
                        const newQuantity =
                            existingProduct.quantity + cp.quantity
                        await CartProduct.update(
                            { quantity: newQuantity },
                            { where: { id: existingProduct.id } },
                        )
                        updatedProducts.push(existingProduct.id)
                    } else {
                        // Create new cart product if it doesn't exist
                        const createdProduct = await CartProduct.create({
                            cartId: existingCart.toJSON().id,
                            productId: cp.productId,
                            priceListId: cp.priceListId,
                            quantity: cp.quantity,
                        })
                        createdProducts.push(createdProduct)
                    }
                }
            } else {
                // Create new cart if none exists
                newCart = await Cart.create({
                    userId,
                    createdBy: user.toJSON().name || 'User',
                    updatedBy: user.toJSON().name || 'User',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    status: 'Created',
                })

                // Create cart products from the original order
                for (const cp of cart.CartProducts) {
                    const createdProduct = await CartProduct.create({
                        cartId: newCart.toJSON().id,
                        productId: cp.productId,
                        priceListId: cp.priceListId,
                        quantity: cp.quantity,
                    })
                    createdProducts.push(createdProduct)
                }
            }
            const totalProductsAdded =
                createdProducts.length + updatedProducts.length

            const encryptedResponse = {
                response: encryptPayload({
                    message: existingCart
                        ? 'Products added to existing cart successfully.'
                        : 'Order reordered successfully.',
                    cartId: newCart.toJSON().id,
                    productsCount: totalProductsAdded,
                    createdProducts: createdProducts.length,
                    updatedProducts: updatedProducts.length,
                }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in reorder: ' +
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
                        error: 'Failed to reorder. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('download-invoice')
    async downloadInvoice(@Body() body: any, @Res() res: Response) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { orderId, token } = decryptedBody

            if (!orderId || !token) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Order ID and Token are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Verify token and find user
            jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
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
            // Check expiry
            if (new Date() > userSession.expiry) {
                await userSession.update({ isExpired: true })
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Session expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            const userId = userSession.toJSON().userId
            const user = await User.findByPk(userId, {
                include: [{ model: Role, as: 'roles' }],
            })
            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            // Find order
            const order = await Order.findByPk(orderId)
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

            // Check authorization: user owns the order or is admin
            const orderUserId = order.toJSON().userId
            const isOwner = orderUserId === userId
            const userRoles = user.toJSON().roles || []
            const isAdmin = userRoles.some((role: any) => role.name === 'Admin')
            if (!isOwner && !isAdmin) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Unauthorized to download this invoice.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Generate PDF
            const pdfBuffer =
                await this.appService.generateOrderInvoicePDF(orderId)

            // Set response headers
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader(
                'Content-Disposition',
                `attachment; filename="Renus Home Foods - Order Invoice - ${orderId}.pdf"`,
            )
            res.setHeader('Content-Length', pdfBuffer.length)

            // Send PDF buffer
            res.send(pdfBuffer)
        } catch (error) {
            const cleanMessage =
                'Error in downloadInvoice: ' +
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
                        error: 'Failed to download invoice. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('get-coupons')
    async getCoupons(@Body() body: any) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const {
                products,
                token,
                couponCode,
                fromStartDate,
                toStartDate,
                fromEndDate,
                toEndDate,
                users,
            } = decryptedBody
            if (!Array.isArray(products) || !Array.isArray(users)) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Products array and Token are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }
            let userId = null
            if (token) {
                // Verify token and find user
                jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret')
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
                // Check expiry
                if (new Date() > userSession.expiry) {
                    await userSession.update({ isExpired: true })
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Session expired.',
                            }),
                        },
                        HttpStatus.FORBIDDEN,
                    )
                }
                userId = userSession.toJSON().userId
            }
            // Call SP to update coupon users for all users
            await Sequelize.query('CALL UpdateCouponUsersForAllUsers()')

            // Prepare parameters for SP
            const p_products = products?.length > 0 ? products.join(',') : null
            const p_users = users?.length > 0 ? users.join(',') : null
            // Call SP
            const results = await Sequelize.query(
                'CALL GetFilteredCoupons(:userId, :products, :couponCode, :fromStartDate, :toStartDate, :fromEndDate, :toEndDate, :users)',
                {
                    replacements: {
                        userId,
                        products: p_products,
                        couponCode: couponCode || null,
                        fromStartDate: fromStartDate || null,
                        toStartDate: toStartDate || null,
                        fromEndDate: fromEndDate || null,
                        toEndDate: toEndDate || null,
                        users: p_users,
                    },
                },
            )
            const couponIdsStr = (results[0] as any)?.couponIds
            const couponIds = couponIdsStr
                ? couponIdsStr.split(',').map(Number)
                : []
            if (couponIds.length === 0) {
                const encryptedResponse = {
                    response: encryptPayload({ coupons: [] }),
                }
                return encryptedResponse
            }

            // Find coupons with associations
            const coupons = await CouponCode.findAll({
                where: { id: { [Op.in]: couponIds } },
                include: [
                    {
                        model: User,
                        required: false,
                        as: 'users',
                    },
                    {
                        model: CouponProducts,
                        required: false,
                        include: [
                            {
                                model: Product,
                                include: [ProductImage, Category],
                            },
                        ],
                    },
                    {
                        model: CouponDiscounts,
                        required: false,
                    },
                ],
            })
            // Filter coupons based on user association
            const filteredCoupons = coupons.filter((coupon) => {
                const couponJSON = coupon.toJSON()
                return userId === null
                    ? couponJSON.isForNewUsers === true
                    : couponJSON.users?.some((u: any) => u.id === userId)
            })

            // Format coupons
            const formattedCoupons = filteredCoupons.map((coupon) => {
                const couponJSON = coupon.toJSON()
                return {
                    id: couponJSON.id,
                    code: couponJSON.code,
                    startDate: new Date(
                        couponJSON.startDate,
                    ).toLocaleDateString('en-GB'),
                    endDate: new Date(couponJSON.endDate).toLocaleDateString(
                        'en-GB',
                    ),
                    isActive: couponJSON.isActive,
                    isGroupable: couponJSON.isGroupable,
                    isForAllUsers: couponJSON.isForAllUsers,
                    isForNewUsers: couponJSON.isForNewUsers,
                    discounts:
                        couponJSON.CouponDiscounts?.map((discount: any) => ({
                            id: discount.id,
                            name: discount.name,
                            discount: discount.discount,
                            flatrate: discount.flatrate,
                        })) || [],
                    products:
                        couponJSON.CouponProducts?.map((cp: any) => ({
                            id: cp.productId,
                            name: cp.Product?.name,
                            tagline: cp.Product?.tagline,
                            image: cp.Product?.ProductImages?.[0]?.fileName,
                            category: cp.Product?.Category?.category,
                        })) || [],
                    users:
                        couponJSON.users?.map((u: any) => ({
                            id: u.id,
                            name: u.name,
                            phone: u.phone,
                            email: u.email,
                        })) || [],
                }
            })

            const encryptedResponse = {
                response: encryptPayload({ coupons: formattedCoupons }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in getCoupons: ' +
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
                        error: 'Failed to fetch coupons. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}
