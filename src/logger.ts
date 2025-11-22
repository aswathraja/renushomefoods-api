import * as dotenv from 'dotenv'
import morgan from 'morgan'
import { join } from 'path'
import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
dotenv.config()
export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: () =>
                new Date().toLocaleString('en-US', {
                    hour12: true,
                }),
        }),
        winston.format.errors({ stack: true }),
        winston.format.printf((info) => {
            const { timestamp, level, message, stack } = info as {
                timestamp: string
                level: string
                message: string
                stack?: string
            }
            return `[${timestamp}] - [${level.toUpperCase()}] ${message}${Boolean(stack) === true ? ` - ${stack}` : ''}`
        }),
    ),
    defaultMeta: { service: 'renushomefoods-api' },
    transports: [
        new DailyRotateFile({
            filename: join(
                process.env.LOG_PATH || '',
                'renushomefoods-api-error-%DATE%.log',
            ),
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new DailyRotateFile({
            filename: join(
                process.env.LOG_PATH || '',
                'renushomefoods-api-%DATE%.log',
            ),
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({
                    format: () =>
                        new Date().toLocaleString('en-US', {
                            hour12: true,
                        }),
                }),
                winston.format.errors({ stack: false }),
                winston.format.printf((info) => {
                    const { timestamp, level, message, stack } = info as {
                        timestamp: string
                        level: string
                        message: string
                        stack?: string
                    }
                    return `[${timestamp}] - [${level.toUpperCase()}] ${message}${Boolean(stack) === true ? ` - ${stack}` : ''}`
                }),
            ),
        }),
    )
}

export const morganMiddleware = morgan('combined', {
    stream: {
        write: (message: string) => {
            logger.info(message.trim())
        },
    },
})
