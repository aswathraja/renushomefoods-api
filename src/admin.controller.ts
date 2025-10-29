import { Controller, HttpException, HttpStatus } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { Role, User, UserSession } from './models'
import { encryptPayload } from './utils'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

@Controller('admin')
export class AdminController {
    constructor() {}

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
}
