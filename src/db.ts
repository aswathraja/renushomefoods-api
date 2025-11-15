import { sequelize } from './database'
import { logger } from './logger'
import './models'

export { sequelize }

export async function connectToDatabase() {
    try {
        await sequelize.authenticate()
        await sequelize.sync() // Sync models with the database
        logger.info('Connection has been established successfully.')
    } catch (error) {
        const cleanMessage =
            'Unable to connect to the database: ' +
            (error?.original?.sqlMessage ||
                error?.parent?.sqlMessage ||
                error.message ||
                'Unknown error')
        const err = new Error(cleanMessage)
        err.stack = error.stack // keep original stack

        logger.error(err) // Winston now logs message + stack
        process.exit(1)
    }
}
