import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()
export const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USERNAME || '',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || '',
        dialect: 'mysql',
        logging: process.env.SQL_LOGGING === 'true', // Set to true for SQL query logging
    },
)
