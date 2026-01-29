import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common'
import { join } from 'path'
import { sequelize } from '../database/database'
import { logger } from '../logger/logger'
import { Message } from '../models/models'
import { AppService } from '../services/app.service'
import { decryptPayload, encryptPayload } from '../utils/utils'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Body() body: any, @Query() query: any, @Res() res): any {
        // Serve the React build index.html file
        res.sendFile(join(__dirname, 'web', 'index.html'))
    }

    @Get('status')
    async getStatus(): Promise<{
        status: string
        checks: Record<string, any>
    }> {
        const checks: Record<string, any> = {}
        let allHealthy = true

        // Check required environment variables
        const requiredEnvVars = [
            'DB_NAME',
            'DB_USERNAME',
            'DB_PASSWORD',
            'DB_HOST',
            'SMTP_USER',
        ]

        for (const envVar of requiredEnvVars) {
            const value = process.env[envVar]
            const isSet = value !== undefined && value !== ''
            checks[envVar] = {
                required: true,
                set: isSet,
                value: isSet ? '***' : 'NOT SET',
            }
            if (!isSet) allHealthy = false
        }

        // Check database connectivity
        try {
            await sequelize.authenticate()
            checks.database = {
                status: 'connected',
                healthy: true,
            }
        } catch (error) {
            checks.database = {
                status: 'disconnected',
                healthy: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            }
            allHealthy = false
        }

        return {
            status: allHealthy ? 'healthy' : 'unhealthy',
            checks,
        }
    }

    @Post('message')
    async createMessage(@Body() body: { request?: string }) {
        try {
            const decryptedBody = decryptPayload(body.request)
            if (
                !decryptedBody.name ||
                !decryptedBody.phone ||
                !decryptedBody.message
            ) {
                return {
                    error: encryptPayload({
                        error: 'Name, Phone, Message fields are required.',
                    }),
                }
            }
            const msg = await Message.create({
                name: decryptedBody.name,
                phone: decryptedBody.phone,
                email: decryptedBody.email,
                message: decryptedBody.message,
            })
            await this.appService.sendMail({
                to: process.env.SMTP_USER,
                subject: `Renu's Home Foods - Message from ${decryptedBody.name}`,
                template: 'simple-message',
                data: {
                    logo: 'https://renushomefoods.com/static/logo.png',
                    userFullName: 'Renuga',
                    message: `Message from ${decryptedBody.name} (${decryptedBody?.phone} - ${decryptedBody.email}). <br/><br/> ${decryptedBody.message.replace(/\n/gim, '<br/>')}`,
                    year: new Date().getFullYear().toString(),
                },
            })
            return { response: encryptPayload(msg) }
        } catch (error) {
            const cleanMessage =
                'Error in createMessage: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            return {
                error: encryptPayload({ error: 'Failed to create message.' }),
            }
        }
    }
}
