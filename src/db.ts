import { Sequelize } from 'sequelize';
// Database configuration
export const sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true for SQL query logging
});
import './models';

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true}); // Sync models with the database
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}
