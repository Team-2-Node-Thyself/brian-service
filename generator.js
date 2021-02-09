const sequelizeStream = require('sequelize-stream')
const faker = require('faker');
const { Product, Colors, connection } = require('./pgDatabase/model');

//open a stream to db
// const stream = sequelizeStream(connection);
// stream.on('data', ({instance, event}) => console.log(event, instance.toJSON()));

//generate product data and insert it to the products table
const products = async () => {
  for (let i = 0; i < 3000; i++) {
    let prod = [];
    for (let j = 0; j < 3000; j++) {
      let product = {
        prodName: faker.commerce.productName(),
        price: faker.finance.amount(10, 300, 2),
        discount: Math.floor(Math.random() * 50)
      };
      prod.push(product);
    }
    try {
      await Product.bulkCreate(prod)
    } catch (err) {
      console.log(err);
    }
  }
};
products();

//generate color data and insert it into the Colors table
const colors = async () => {
  for (let i = 0; i < 3000; i++) {
    let prodColors = [];
    for (let j = 0; j < 3000; j++) {
      let color1 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        productId: 3000 * i + j + 1
      };
      prodColors.push(color1);
      let color2 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        productId: 100 * i + j + 1
      };
      prodColors.push(color2);
    }
    try {
     await Colors.bulkCreate(prodColors)
    } catch (err) {
      console.log(err)
    }
  }
}
colors()


