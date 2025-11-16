import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common'
import * as CryptoES from 'crypto-es'
import * as jwt from 'jsonwebtoken'
import { Op, Sequelize, UniqueConstraintError } from 'sequelize'
import { AppService } from './app.service'
import { sequelize } from './db'
import { logger } from './logger'
import { Order, Role, User, UserAddress, UserRole, UserSession } from './models'
import { decryptPayload, encryptPayload } from './utils'

function hashPassword(password: string): string {
    return CryptoES.SHA256(password).toString()
}

function comparePassword(password: string, hash: string): boolean {
    return CryptoES.SHA256(password).toString() === hash
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

@Controller('user')
export class UserController {
    constructor(private readonly appService: AppService) {}
    @Post('register')
    async register(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const hashedPassword = hashPassword(decryptedBody.password)
            // Check for existing user by email, username, or phone
            const existingUser = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: decryptedBody.email },
                        { username: decryptedBody.username },
                        { phone: decryptedBody.phone },
                    ],
                },
            })

            if (existingUser) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User with provided email, username, or phone already exists.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Create user
            await User.create({
                name: decryptedBody.name,
                username: decryptedBody.username,
                email: decryptedBody.email,
                phone: decryptedBody.phone,
                password: hashedPassword,
            })
            const user = await User.findOne({
                where: {
                    username: decryptedBody.username,
                    email: decryptedBody.email,
                    password: hashedPassword,
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
            await user.reload() // re-fetch from DB
            await UserAddress.create({
                userId: user.toJSON().id,
                name: decryptedBody.name, // or decryptedBody.addressName if separate
                addressLine1: decryptedBody.address,
                city: decryptedBody.city,
                state: decryptedBody.state,
                country: decryptedBody.country,
                pincode: decryptedBody.pincode,
                phone: decryptedBody.phone,
                isDefault: true, // assuming this is the first address
            })

            // Assign 'Buyer' role (roleId 2) to the user
            buyerRole = await Role.findByPk(2)
            if (!buyerRole) {
                buyerRole = await Role.create({ id: 2, name: 'Buyer' })
            }
            await UserRole.create({
                userId: user.toJSON().id,
                roleId: 2,
            })

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok', user }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in register: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack

            // Re-throw if it's an HttpException (let Nest handle it)
            if (error instanceof HttpException) {
                throw error
            }

            if (error instanceof UniqueConstraintError) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error:
                                'Duplicate entry. ' +
                                error.errors.map((e: any) => e.path),
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to register user. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('update')
    async update(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { token, name, username, email, phone } = decryptedBody

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

            // Verify token
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId
            const user = await User.findByPk(userId)
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

            // Check for uniqueness of username, email, phone (excluding current user)
            const existingUser = await User.findOne({
                where: {
                    [Op.or]: [{ username }, { email }, { phone }],
                    id: { [Op.ne]: userId },
                },
            })

            if (existingUser) {
                const errors: Record<string, string> = {}
                const existing = existingUser.toJSON()
                if (existing.username === username) {
                    errors.username = 'Username is already in use'
                }
                if (existing.email === email) {
                    errors.email = 'Email is already in use'
                }
                if (existing.phone === phone) {
                    errors.phone = 'Phone number is already in use'
                }
                throw new HttpException(
                    {
                        error: encryptPayload(errors),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            // Update user
            await user.update({ name, username, email, phone })

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok', user: user }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in update: ' +
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

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to update user. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('validate-details')
    async checkAvailability(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { username, email, phone } = decryptedBody
            if (
                username === undefined ||
                email === undefined ||
                phone === undefined
            ) {
                throw new HttpException(
                    { error: 'Missing Required fields' },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Normalize phone number: remove spaces and leading "+"
            const normalizePhone = (num: string) =>
                num.replace(/^\+\d{1,2}|\s+/g, '')

            const normalizedPhone = normalizePhone(phone)

            const whereConditions: any = {
                [Op.or]: [
                    { username },
                    { email },
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
            const existingUsers = await User.findAll({ where: whereConditions })

            const errors: Record<string, string> = {}

            // Now check which fields matched
            for (const user of existingUsers) {
                const userJSON = user.toJSON()
                if (userJSON.username === username) {
                    errors.username = 'Username is already in use'
                }

                if (userJSON.email === email) {
                    errors.email = 'Email is already in use'
                }
                const dbPhoneNormalized = userJSON.phone.replace(
                    /^\+\d{1,2}|\s+/g,
                    '',
                )

                if (dbPhoneNormalized === normalizedPhone) {
                    errors.phone = 'Phone number is already in use'
                }
            }

            // If any specific field matched, return detailed errors
            if (Object.keys(errors).length > 0) {
                throw new HttpException(
                    {
                        error: encryptPayload(errors),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok' }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in checkAvailability: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            // Re-throw if it's an HttpException (let Nest handle it)
            if (error instanceof HttpException) {
                throw error
            }

            // For other unexpected errors, throw a generic 500
            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to check availability. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('forgot-password')
    async forgotPassword(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)

            const { identifier, regenerate } = decryptedBody

            if (!identifier) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Missing identifier (username, email, or phone)',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Normalize input to last 10 digits (for phone comparison)
            const identifierDigits = identifier.replace(/\D/g, '').slice(-10)

            // Build the query to match by username, email, or last 10 digits of phone
            const user = await User.findOne({
                where: {
                    [Op.or]: [
                        { username: identifier },
                        { email: identifier },
                        sequelize.where(
                            sequelize.fn(
                                'RIGHT',
                                sequelize.fn(
                                    'REPLACE',
                                    sequelize.fn(
                                        'REPLACE',
                                        sequelize.fn(
                                            'REPLACE',
                                            sequelize.fn(
                                                'REPLACE',
                                                sequelize.fn(
                                                    'REPLACE',
                                                    sequelize.col('phone'),
                                                    '+',
                                                    '',
                                                ),
                                                ' ',
                                                '',
                                            ),
                                            '-',
                                            '',
                                        ),
                                        '(',
                                        '',
                                    ),
                                    ')',
                                    '',
                                ),
                                10,
                            ),
                            identifierDigits,
                        ),
                    ],
                },
            })

            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found with provided identifier.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }
            let otp = user.toJSON().otp
            if (regenerate === true || Boolean(user?.toJSON()?.otp) === false) {
                // Generate 4-digit OTP
                const newOTP = this.appService.generateRandomNumber(4)
                otp = newOTP
                // Update OTP in the database
                await user.update({ otp: newOTP })
            }

            // Send OTP email
            await this.appService.sendMail({
                to: user.toJSON().email,
                subject: "Renu's Home Foods - Password Reset OTP Verification",
                template: 'simple-message',
                data: {
                    logo: 'https://renushomefoods.com/static/logo.png',
                    userFullName: user.toJSON().name,
                    message: `Your OTP to reset your password for your account with with ${user.toJSON().email} and phone number ${user.toJSON().phone} is ${otp}. This OTP is valid for 10 minutes.`,
                    year: new Date().getFullYear().toString(),
                },
            })

            // Mask the email for partial visibility
            const maskedEmail = this.appService.maskEmail(user.toJSON().email)

            return {
                response: encryptPayload({
                    message: `OTP has been sent to your registered email id : ${maskedEmail}.`,
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in forgotPassword: ' +
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

            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to process forgot password request. ' +
                            error.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('reset-password')
    async resetPassword(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)

            const { identifier, otp, newPassword } = decryptedBody
            if (!identifier || !otp || !newPassword) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Missing required fields: identifier, otp, password',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Normalize phone input (if applicable)
            const identifierDigits = identifier.replace(/\D/g, '').slice(-10)

            const user = await User.findOne({
                where: {
                    [Op.or]: [
                        { username: identifier },
                        { email: identifier },
                        Sequelize.where(
                            Sequelize.fn(
                                'RIGHT',
                                Sequelize.fn(
                                    'REPLACE',
                                    Sequelize.fn(
                                        'REPLACE',
                                        Sequelize.fn(
                                            'REPLACE',
                                            Sequelize.fn(
                                                'REPLACE',
                                                Sequelize.fn(
                                                    'REPLACE',
                                                    Sequelize.col('phone'),
                                                    '+',
                                                    '',
                                                ),
                                                ' ',
                                                '',
                                            ),
                                            '-',
                                            '',
                                        ),
                                        '(',
                                        '',
                                    ),
                                    ')',
                                    '',
                                ),
                                10,
                            ),
                            identifierDigits,
                        ),
                    ],
                },
            })

            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'User not found with provided identifier.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }
            if (user.toJSON().otp !== otp) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid OTP',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            const hashedPassword = await hashPassword(newPassword)

            await user.update({ password: hashedPassword, otp: null })

            return {
                response: encryptPayload({
                    message: 'Password reset successful',
                }),
            }
        } catch (error) {
            const cleanMessage =
                'Error in resetPassword: ' +
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

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to reset password. ' + error.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('details')
    async getDetails(
        @Headers('Authorization') authHeader: string,
        @Headers('x-encrypted-id') encryptedId?: string,
    ) {
        try {
            let userId: number | null = null
            if (authHeader) {
                const token = authHeader?.replace('Bearer ', '') || ''
                if (!token) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Invalid authorization header.',
                            }),
                        },
                        HttpStatus.BAD_REQUEST,
                    )
                }

                // Verify token
                jwt.verify(token, JWT_SECRET)
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

                userId = session.toJSON().userId
            } else if (encryptedId) {
                const decryptedBody = decryptPayload(encryptedId)
                userId = decryptedBody.id
            } else {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Authorization header or X-Encrypted-Id header is required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            const user = await User.findByPk(userId, {
                attributes: { exclude: ['password'] },
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

            const userWithRoles = {
                ...user.toJSON(),
                roles: user.toJSON().roles || [],
            }

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok', user: userWithRoles }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in getDetails: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to fetch user details. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('login')
    async login(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const identifierDigits = decryptedBody.identifier
                .replace(/\D/g, '')
                .slice(-10)

            const user = await User.findOne({
                where: {
                    [Op.or]: [
                        { username: decryptedBody.identifier },
                        { email: decryptedBody.identifier },
                        sequelize.where(
                            sequelize.fn(
                                'RIGHT',
                                sequelize.fn(
                                    'REPLACE',
                                    sequelize.fn(
                                        'REPLACE',
                                        sequelize.fn(
                                            'REPLACE',
                                            sequelize.fn(
                                                'REPLACE',
                                                sequelize.fn(
                                                    'REPLACE',
                                                    sequelize.col('phone'),
                                                    '+',
                                                    '',
                                                ),
                                                ' ',
                                                '',
                                            ),
                                            '-',
                                            '',
                                        ),
                                        '(',
                                        '',
                                    ),
                                    ')',
                                    '',
                                ),
                                10,
                            ),
                            identifierDigits,
                        ),
                    ],
                },
                include: [
                    {
                        model: Role,
                        as: 'roles',
                        attributes: { exclude: ['id'] }, // exclude 'id' from Role model
                        through: { attributes: [] }, // exclude junction table attributes
                    },
                ],
            })
            if (!user) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid username, email or phone number.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            if (user.toJSON().password === '') {
                await user.update({
                    otp: this.appService.generateRandomNumber(4),
                })
                const updatedUser = await User.findOne({
                    where: {
                        [Op.or]: [
                            { username: decryptedBody.identifier },
                            { email: decryptedBody.identifier },
                            sequelize.where(
                                sequelize.fn(
                                    'RIGHT',
                                    sequelize.fn(
                                        'REPLACE',
                                        sequelize.fn(
                                            'REPLACE',
                                            sequelize.fn(
                                                'REPLACE',
                                                sequelize.fn(
                                                    'REPLACE',
                                                    sequelize.fn(
                                                        'REPLACE',
                                                        sequelize.col('phone'),
                                                        '+',
                                                        '',
                                                    ),
                                                    ' ',
                                                    '',
                                                ),
                                                '-',
                                                '',
                                            ),
                                            '(',
                                            '',
                                        ),
                                        ')',
                                        '',
                                    ),
                                    10,
                                ),
                                identifierDigits,
                            ),
                        ],
                    },
                })
                await this.appService.sendMail({
                    to: updatedUser.toJSON().email,
                    subject:
                        "Renu's Home Foods - Password Reset OTP Verification",
                    template: 'simple-message',
                    data: {
                        logo: 'https://renushomefoods.com/static/logo.png',
                        userFullName: updatedUser.toJSON().name,
                        message: `Your OTP to reset your password for your account with with ${updatedUser.toJSON().email} and phone number ${updatedUser.toJSON().phone} is ${updatedUser.toJSON().otp}. This OTP is valid for 10 minutes.`,
                        year: new Date().getFullYear().toString(),
                    },
                })
                const maskedEmail = this.appService.maskEmail(
                    updatedUser.toJSON().email,
                )
                return {
                    response: encryptPayload({
                        message: `OTP has been sent to your registered email id : ${maskedEmail}.`,
                    }),
                }
            }
            const valid = comparePassword(
                decryptedBody.password,
                user.toJSON().password,
            )
            if (!valid) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Invalid password.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }
            const token = jwt.sign(
                { id: user.toJSON().id, username: user.toJSON().username },
                JWT_SECRET,
                { expiresIn: '1d' },
            ) // Save user session
            await UserSession.create({
                userId: user.toJSON().id,
                token,
                prevToken: token,
                // expiry will auto-default to 1 day later via the model definition
            })
            const encryptedResponse = {
                response: encryptPayload({
                    token,
                    user: {
                        id: user.toJSON().id,
                        username: user.toJSON().username,
                        name: user.toJSON().name,
                        email: user.toJSON().email,
                        phone: user.toJSON().phone,
                    },
                    roles: user.toJSON().roles,
                }),
            }
            return encryptedResponse
        } catch (error) {
            const cleanMessage =
                'Error in login: ' +
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
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to login. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('verify-token')
    async verifyToken(@Body() body: { request: string }) {
        try {
            // 1. Decrypt token
            const decryptedBody = decryptPayload(body.request)
            const decryptedToken = decryptedBody.token

            // 2. Verify JWT validity (signature + expiry)
            jwt.verify(decryptedToken, JWT_SECRET)

            // 3. Check if token exists in DB and is not expired
            const session = await UserSession.findOne({
                where: {
                    [Op.or]: [
                        { token: decryptedToken },
                        { prevToken: decryptedToken },
                    ],
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

            // 4. Optionally check expiry date (in case JWT doesn't handle it fully)
            if (new Date() > session.expiry) {
                // Auto-mark session as expired
                await session.update({ isExpired: true })
                throw new HttpException(
                    { error: 'Session expired' },
                    HttpStatus.FORBIDDEN,
                )
            }

            // 5. Check if token expires within 1 hour, renew if so
            const now = new Date()
            const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000) // 1 hour in milliseconds
            let newToken = null
            const user = await User.findByPk(session.toJSON().userId, {
                include: [
                    {
                        model: Role,
                        as: 'roles',
                        attributes: { exclude: ['id'] }, // exclude 'id' from Role model
                        through: { attributes: [] }, // exclude junction table attributes
                    },
                ],
            })
            if (session.toJSON().expiry <= oneHourFromNow) {
                // Renew token: generate new JWT and update session expiry
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
                newToken = jwt.sign(
                    { id: user.toJSON().id, username: user.toJSON().username },
                    JWT_SECRET,
                    { expiresIn: '1d' },
                )
                // Update session with new token and expiry
                await session.update({
                    token: newToken,
                    prevToken: session.toJSON().token,
                    expiry: new Date(now.getTime() + 24 * 60 * 60 * 1000), // 1 day from now
                })
            } else if (session.toJSON().token != session.toJSON().prevToken) {
                await session.update({
                    prevToken: session.toJSON().token,
                    expiry: new Date(now.getTime() + 24 * 60 * 60 * 1000), // 1 day from now
                })
            }

            const encryptedResponse = {
                response: encryptPayload({
                    status: 'ok',
                    ...(newToken && { newToken }),
                    roles: [...user.toJSON().roles],
                }),
            }
            return encryptedResponse
        } catch (error: any) {
            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    { error: encryptPayload({ error: 'Token expired' }) },
                    HttpStatus.FORBIDDEN,
                )
            }
            throw new HttpException(
                { error: encryptPayload({ error: 'Invalid token' }) },
                HttpStatus.FORBIDDEN,
            )
        }
    }

    @Post('logout')
    async logout(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request) as {
                token: string
            }
            const token = decryptedBody.token
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
            // Find the session and mark it as expired
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
                            error: 'Session not found or already expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            const userId = session.toJSON().userId

            // Update all existing sessions of the user to isExpired: true
            await UserSession.update({ isExpired: true }, { where: { userId } })

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok' }),
            }
            return encryptedResponse
        } catch (error: unknown) {
            if (error instanceof HttpException) {
                throw error
            }

            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to logout. ' + errorMessage,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('default-address')
    async getDefaultAddress(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const token = decryptedBody.token
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

            // Verify token and get session
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

            // Get default address
            const defaultAddress = await UserAddress.findOne({
                where: {
                    userId,
                    isDefault: true,
                },
                include: [User],
            })
            if (!defaultAddress) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'No default address found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            const addressWithEmail = {
                ...defaultAddress.toJSON(),
                email: defaultAddress.toJSON().User?.email,
            }
            delete addressWithEmail?.User
            const encryptedResponse = {
                response: encryptPayload(addressWithEmail),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in getDefaultAddress: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to get default address. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('address')
    async createOrUpdateAddress(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const token = decryptedBody.token
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

            // Verify token and get session
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

            const {
                addressId,
                name,
                addressLine1,
                city,
                state,
                country,
                pincode,
                phone,
                isDefault,
            } = decryptedBody

            if (addressId) {
                // Update existing address
                const address = await UserAddress.findOne({
                    where: { id: addressId, userId },
                })
                if (!address) {
                    throw new HttpException(
                        {
                            error: encryptPayload({
                                error: 'Address not found.',
                            }),
                        },
                        HttpStatus.NOT_FOUND,
                    )
                }

                if (isDefault) {
                    // Unset other default addresses
                    await UserAddress.update(
                        { isDefault: false },
                        { where: { userId, isDefault: true } },
                    )
                }
                await address.reload()
                await address.update({
                    name,
                    addressLine1,
                    city,
                    state,
                    country,
                    pincode,
                    phone,
                    isDefault,
                })

                // Ensure there's a default address
                const hasDefault = await UserAddress.findOne({
                    where: { userId, isDefault: true },
                })
                if (!hasDefault) {
                    const latestAddress = await UserAddress.findOne({
                        where: { userId },
                        order: [['id', 'DESC']],
                    })
                    if (latestAddress) {
                        await latestAddress.update({ isDefault: true })
                    }
                }

                const encryptedResponse = {
                    response: encryptPayload({
                        status: 'ok',
                        address: address,
                    }),
                }
                return encryptedResponse
            } else {
                // Create new address
                if (isDefault) {
                    // Unset other default addresses
                    await UserAddress.update(
                        { isDefault: false },
                        { where: { userId, isDefault: true } },
                    )
                }

                const newAddress = await UserAddress.create({
                    userId,
                    name,
                    addressLine1,
                    city,
                    state,
                    country,
                    pincode,
                    phone,
                    isDefault,
                })

                const encryptedResponse = {
                    response: encryptPayload({
                        status: 'ok',
                        address: newAddress,
                    }),
                }
                return encryptedResponse
            }
        } catch (error: any) {
            const cleanMessage =
                'Error in createOrUpdateAddress: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error:
                            'Failed to create or update address. ' +
                            error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('addresses')
    async getAddresses(@Headers('authorization') authHeader: string) {
        try {
            const token = authHeader?.replace('Bearer ', '') || ''
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

            // Verify token and get session
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

            // Get all addresses for the user
            const addresses = await UserAddress.findAll({
                where: { userId },
                include: [User],
            })

            const addressesWithEmail = addresses
                .map((address) => {
                    const addr = address.toJSON()
                    return {
                        ...addr,
                        email: addr.User?.email,
                    }
                })
                .map((addr) => {
                    delete addr.User
                    return addr
                })

            const encryptedResponse = {
                response: encryptPayload({
                    addresses: addressesWithEmail,
                }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in getAddresses: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to get addresses. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('change-password')
    async changePassword(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { token, currentPassword, newPassword } = decryptedBody

            if (!token || !currentPassword || !newPassword) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token, current password, and new password are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Verify token
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

            // Get user
            const user = await User.findByPk(userId)
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

            // Verify current password
            const valid = comparePassword(
                currentPassword,
                user.toJSON().password,
            )
            if (!valid) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Current password is incorrect.',
                        }),
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }

            // Hash new password
            const hashedNewPassword = hashPassword(newPassword)

            // Update password
            await user.update({ password: hashedNewPassword })

            // Expire all other sessions for the user except the current one
            await UserSession.update(
                { isExpired: true },
                {
                    where: {
                        userId,
                        token: { [Op.ne]: token },
                    },
                },
            )

            const encryptedResponse = {
                response: encryptPayload({
                    status: 'ok',
                    message: 'Password changed successfully.',
                }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in changePassword: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to change password. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('roles')
    async getUserRoles(@Headers('Authorization') authHeader: string) {
        try {
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

            // Verify token
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

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

            const roles = user.toJSON().roles || []
            const encryptedResponse = {
                response: encryptPayload({ roles }),
            }
            return encryptedResponse
        } catch (error: any) {
            if (error instanceof HttpException) {
                throw error
            }

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to get user roles. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Post('roles')
    async updateUserRoles(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const { userId, roleIds } = decryptedBody

            if (!userId || !Array.isArray(roleIds)) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'userId and roleIds array are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            const user = await User.findByPk(userId)
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

            // Remove existing roles
            await UserRole.destroy({ where: { userId } })

            // Add new roles
            if (roleIds.length > 0) {
                const userRoles = roleIds.map((roleId: number) => ({
                    userId,
                    roleId,
                }))
                await UserRole.bulkCreate(userRoles)
            }

            const encryptedResponse = {
                response: encryptPayload({ status: 'ok' }),
            }
            return encryptedResponse
        } catch (error: any) {
            if (error instanceof HttpException) {
                throw error
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to update user roles. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Delete('address')
    async deleteAddress(@Body() body: { request: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            const token = decryptedBody.token
            const addressId = decryptedBody.addressId
            if (!token || !addressId) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token and address id are required.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Verify token and get session
            jwt.verify(token, JWT_SECRET)
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

            const userId = session.toJSON().userId

            // Find the address
            const address = await UserAddress.findOne({
                where: { id: addressId, userId },
            })
            if (!address) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Address not found.',
                        }),
                    },
                    HttpStatus.NOT_FOUND,
                )
            }

            // Check if the address is linked to any orders
            const linkedOrders = await Order.findAll({
                where: { userAddressId: addressId },
            })

            if (linkedOrders.length > 0) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Cannot delete address as it is linked to existing orders.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // Get all addresses for the user
            const allAddresses = await UserAddress.findAll({
                where: { userId },
            })

            if (allAddresses.length === 1) {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Cannot delete the only address. Please add another address before deleting this one.',
                        }),
                    },
                    HttpStatus.BAD_REQUEST,
                )
            }

            // If deleting the default address, set another as default
            if (address.toJSON().isDefault) {
                const otherAddresses = allAddresses.filter(
                    (addr) => addr.id !== addressId,
                )
                if (otherAddresses.length > 0) {
                    await otherAddresses[0].update({ isDefault: true })
                }
            }

            // Delete the address
            await address.destroy()

            const encryptedResponse = {
                response: encryptPayload({
                    status: 'ok',
                    message: 'Address deleted successfully.',
                }),
            }
            return encryptedResponse
        } catch (error: any) {
            const cleanMessage =
                'Error in deleteAddress: ' +
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

            if (error.name === 'TokenExpiredError') {
                throw new HttpException(
                    {
                        error: encryptPayload({
                            error: 'Token expired.',
                        }),
                    },
                    HttpStatus.FORBIDDEN,
                )
            }

            throw new HttpException(
                {
                    error: encryptPayload({
                        error: 'Failed to delete address. ' + error?.message,
                    }),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}
