const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('senac_game', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  password: '',
  logging: true
});

module.exports = sequelize;
