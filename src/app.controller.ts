import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common'
import { join } from 'path'
import { AppService } from './app.service'
import { logger } from './logger'
import { Message } from './models'
import { decryptPayload, encryptPayload } from './utils'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Body() body: any, @Query() query: any, @Res() res): any {
        // Serve the React build index.html file
        res.sendFile(join(__dirname, 'web', 'index.html'))
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
