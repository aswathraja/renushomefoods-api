const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('', '', '', {
  host: '',
  dialect: 'mysql',
  logging: false, // Set to true for SQL query logging
});

module.exports = { sequelize };
