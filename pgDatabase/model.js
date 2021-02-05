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
connection.sync()

//create a stream to the DB
const stream = sequelizeStream(connection);
// stream.on('data', ({instance, event}) => console.log(event, instance.toJSON()));

//generate product data and insert it to the products table
const products = async () => {
  for (let i = 0; i < 1000; i++) {
    let prod = [];
    for (let j = 0; j < 1000; j++) {
      let product = {
        prodName: faker.commerce.productName(),
        price: faker.finance.amount(10, 300, 2),
        discount: Math.floor(Math.random() * 50)
      };
      prod.push(product);
    }
    await Product.bulkCreate(prod, {returning: false})
      .catch(err => console.log(err));
  }
};
products();

//generate color data and insert it into the Colors table
const colors = async () => {
  for (let i = 0; i < 1000; i++) {
    let prodColors = [];
    for (let j = 0; j < 1000; j++) {
      let color1 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        prodnum: 10 * i + j + 1
      };
      prodColors.push(color1);
      let color2 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        prodnum: 10 * i + j + 1
      };
      prodColors.push(color2);
    }
    await Colors.bulkCreate(prodColors, {returning: false})
  }
}
colors()

module.exports = { Product, Colors };
