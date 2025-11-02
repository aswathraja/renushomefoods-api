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
import { sequelize } from './db'
import { Role, User, UserSession } from './models'
import { decryptPayload, encryptPayload } from './utils'

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
            console.log(adjustedFromDate, adjustedToDate, 'dates')

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
            console.error('Error in getDashboardKPIs:', error)
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
            console.log(adjustedFromDate, adjustedToDate, 'dates')
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
            console.error('Error in getChartData:', error)
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

    @Get('user-list')
    async getUsers(@Headers() headers: Record<string, string>) {
        try {
            // Authenticate admin
            const authHeader = headers['authorization'] || ''
            await this.authenticateAdmin(authHeader)

            // Fetch all users with only name and phone
            const users = await User.findAll({
                attributes: ['name', 'phone'],
            })
            return {
                response: encryptPayload({ users }),
            }
        } catch (error) {
            console.error('Error in getUsers:', error)
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
}
