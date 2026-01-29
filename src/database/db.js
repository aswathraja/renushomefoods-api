const { sequelize } = require('./database');
const { logger } = require('../logger/logger');
require('../models/models');

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
    await sequelize.sync({ alter: true}); // Sync models with the database
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
    process.exit(1);
  }
}

module.exports = { sequelize, connectToDatabase };
