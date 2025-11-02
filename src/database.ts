import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('', '', '', {
    host: '',
    dialect: 'mysql',
    logging: true, // Set to true for SQL query logging
})
