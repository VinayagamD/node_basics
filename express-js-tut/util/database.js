const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'vinay', 'drago', {
    dialect: 'mysql',
    host: 'localhost'
} );

module.exports = sequelize;
