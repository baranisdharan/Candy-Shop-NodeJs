const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '3601', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
