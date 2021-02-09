const Sequelize = require('sequelize');
const config = require('../dbConfig.js');

const connection = new Sequelize(`${config.DB_DB}`, `${config.DB_USER_NAME}`, `${config.DB_PW}`, {host: `${config.DB_HOST}`, port: `${config.DB_PORT}`, dialect: 'postgres', logging: false});

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
  productId: Sequelize.INTEGER
});
//define relationships
Product.hasMany(Colors, {
  as: 'colors'
});
Colors.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
});
//connect and create schema then disconnect
connection.sync()
  .catch((err) => console.log(err));


//export models and connection
module.exports = { Product, Colors, connection };