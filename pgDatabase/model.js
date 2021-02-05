const Sequelize = require('sequelize');
const config = require('../dbConfig.js');
const sequelizeStream = require('sequelize-stream');
const faker = require('faker');

const connection = new Sequelize('general_product_info_prod', `${config.DB_USER_NAME}`, `${config.DB_PW}`, {host: 'localhost', dialect: 'postgres', logging: false});

//Define products table
const Product = connection.define('products', {
  prodName: Sequelize.STRING,
  price: Sequelize.FLOAT,
  discount: Sequelize.INTEGER
});
//define colors table
const Colors = connection.define('colors', {
  color: Sequelize.STRING,
  qty: Sequelize.INTEGER,
  prodnum: Sequelize.INTEGER
});
//define relationships
Product.hasMany(Colors, {
  as: 'colors'
});
Colors.belongsTo(Product, {
  foreignKey: 'prodnum'
});
//connect and create schema then disconnect
connection.sync();


//export models and connection
module.exports = { Product, Colors, connection };
