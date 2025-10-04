const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('renushomefoods', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true for SQL query logging
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true}); // Sync models with the database
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

module.exports = { sequelize, connectToDatabase };