import { Injectable } from '@nestjs/common'
import { readFileSync } from 'fs'
import Handlebars from 'handlebars'
import * as nodemailer from 'nodemailer'
import { join } from 'path'
import { logger } from './logger'
import {
    Cart,
    CartProduct,
    Order,
    PriceList,
    Product,
    User,
    UserAddress,
} from './models'

// Register Handlebars helpers
Handlebars.registerHelper('eq', function (a, b) {
    return a === b
})

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }

    /**
     * Generates a random number of the specified length.
     * @param length The length of the random number to generate.
     * @returns A string representation of the random number.
     */
    public generateRandomNumber(length: number): string {
        if (length <= 0) {
            throw new Error('Length must be a positive integer.')
        }
        const min = Math.pow(10, length - 1)
        const max = Math.pow(10, length) - 1
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        return randomNumber.toString()
    }

    public maskEmail(email: string): string {
        return email.replace(/(.{2}).*(@.*)/, '$1***$2')
    }

    /**
     * Sanitizes a string to a number, removing Rupee symbol and spaces.
     * Returns 0 if null, undefined, or NaN.
     * @param value The string to sanitize.
     * @returns The parsed number or 0.
     */
    public sanitizeStringToNumber(value: string | null | undefined): number {
        if (value == null) return 0
        const cleaned = value.replace(/₹|\s/g, '')
        const num = parseFloat(cleaned)
        return isNaN(num) ? 0 : num
    }

    /**
     * Fetches order details for invoice template.
     * @param orderId The order ID.
     * @param message Additional message for the invoice.
     * @returns Object with formatted data for the template.
     */
    public async getOrderInvoiceData(orderId: string, message: string) {
        try {
            // Fetch order with associated models
            const order = await Order.findByPk(orderId, {
                include: [
                    {
                        model: UserAddress,
                        as: 'UserAddress',
                        include: [
                            {
                                model: User,
                                as: 'User',
                            },
                        ],
                    },
                    {
                        model: Cart,
                        as: 'Cart',
                        include: [
                            {
                                model: CartProduct,
                                as: 'CartProducts',
                                include: [
                                    {
                                        model: Product,
                                        as: 'Product',
                                    },
                                    {
                                        model: PriceList,
                                        as: 'PriceList',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            })

            if (!order) {
                throw new Error('Order not found')
            }

            // Format billing address
            const billingAddress = `${order.toJSON().UserAddress.name}<br/>${order.toJSON().UserAddress.addressLine1}<br/>${order.toJSON().UserAddress.city}, ${order.toJSON().UserAddress.state}<br/>${order.toJSON().UserAddress.country} - ${order.toJSON().UserAddress.pincode}`

            // Extract user contact details
            const userEmail = order.toJSON().UserAddress.User.email
            const userPhone = order.toJSON().UserAddress.User.phone

            // Determine shipping address
            let shippingAddress: string
            if (order.toJSON().shippingMethod === 'Home Delivery') {
                shippingAddress = billingAddress // Same as billing
            } else if (order.toJSON().shippingMethod === 'Free Store Pickup') {
                shippingAddress =
                    'D2, Vaigundar Villa<br/>Sumangali Manasarovar Garden<br/>Paruthipattu<br/>Chennai - 600071'
            } else {
                shippingAddress = 'Unknown'
            }

            // Calculate items with totals
            const items = order
                .toJSON()
                .Cart.CartProducts.map((cartProduct) => ({
                    name: cartProduct.Product.name,
                    quantity: cartProduct.quantity,
                    price: cartProduct.PriceList.unitprice.toFixed(2),
                    total: (
                        cartProduct.quantity * cartProduct.PriceList.unitprice
                    ).toFixed(2),
                }))

            // Calculate subtotal
            const subtotal = order
                .toJSON()
                .Cart.CartProducts.reduce(
                    (sum, cartProduct) =>
                        sum +
                        cartProduct.quantity * cartProduct.PriceList.unitprice,
                    0,
                )

            // Determine shipping
            let shipping: string | boolean
            if (
                subtotal < 999 &&
                order.toJSON().shippingMethod === 'Home Delivery'
            ) {
                shipping = '₹99.00'
            } else {
                shipping = '<strong>Free</strong>'
            }

            // Calculate total
            const total = subtotal + this.sanitizeStringToNumber(shipping)

            return {
                logo: 'https://renushomefoods.com/static/logo.png',
                message,
                billingAddress,
                billingEmail: userEmail,
                billingPhone: userPhone,
                shippingAddress,
                shippingEmail:
                    order.toJSON().shippingMethod === 'Home Delivery'
                        ? userEmail
                        : 'renushomefoods@gmail.com',
                shippingPhone:
                    order.toJSON().shippingMethod === 'Home Delivery'
                        ? userPhone
                        : '+91 93637-20792',
                items,
                subtotal: subtotal.toFixed(2),
                shipping,
                total: total.toFixed(2),
                year: new Date().getFullYear().toString(),
                orderId: order.toJSON().id,
                orderDate: this.formatDate(
                    new Date(order.toJSON().orderedDate),
                    true,
                ),
                pan: '',
                gst: '',
                cin: '',
                phone: '+91 93637-20792',
                email: 'renushomefoods@gmail.com',
                paymentMethod: order.toJSON().paymentMethod || '',
                shippingMethod: order.toJSON().shippingMethod || '',
                orderNotes:
                    order.toJSON().notes?.replace(/\n/gim, '<br/>') || '',
            }
        } catch (error) {
            logger.error('Error fetching order invoice data:', error)
            throw error
        }
    }

    /**
     * Formats a date to "DD/MM/yyyy hh:mm:ss AM/PM" format.
     * @param date The date to format.
     * @returns Formatted date string.
     */
    public formatDate(date: Date, includeTimestamp: boolean = true): string {
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        const ampm = hours >= 12 ? 'PM' : 'AM'
        const formattedHours = hours % 12 || 12
        return includeTimestamp === true
            ? `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`
            : `${day}/${month}/${year}`
    }

    /**
     * Renders HTML template with data using Handlebars.
     * @param template The template name.
     * @param data The data to render in the template.
     * @returns Rendered HTML string.
     */
    private renderTemplate(template: string, data: any): string {
        const templatePath = join(__dirname, 'templates', `${template}.html`)
        const templateSource = readFileSync(templatePath, 'utf8')
        const compiledTemplate = Handlebars.compile(templateSource)
        return compiledTemplate(data)
    }

    /**
     * Sends an HTML email using Nodemailer with a responsive template.
     */
    public async sendMail({
        to,
        subject,
        template,
        data,
    }: {
        to: string
        subject: string
        template: string
        data: any
    }) {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            })

            const html = this.renderTemplate(template, data)

            const info = await transporter.sendMail({
                from: `"Renu's Home Foods" <${process.env.SMTP_USER}>`,
                to,
                subject,
                html,
            })

            logger.info('✅ Email sent')
            return { success: true, messageId: info.messageId }
        } catch (error) {
            const cleanMessage =
                'Error in sendMail: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            return { success: false, error }
        }
    }
}
