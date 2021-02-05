const fs = require('fs');
const faker = require('faker');
const { Product, Colors } = require('./pgDatabase/model');

// const products = [];
const products = async () => {
  for (let i = 0; i < 100; i++) {
    let prod = [];
    for (let j = 0; j < 100; j++) {
      let product = {
        prodName: faker.commerce.productName(),
        price: faker.finance.amount(10, 300, 2),
        discount: Math.floor(Math.random() * 50)
      };
      prod.push(product);
    }
    await Product.bulkCreate(prod, {returning: false})
  }
}
products()

// fs.writeFileSync('products.json', JSON.stringify(products));

// const colors = [];
const colors = async () => {
  for (let i = 0; i < 100; i++) {
    let prodColors = [];
    for (let j = 0; j < 100; j++) {
      let color1 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        prod_Id: 10 * i + j + 1
      };
      prodColors.push(color1);
      let color2 = {
        color: faker.commerce.color(),
        qty: Math.floor(Math.random() * 30),
        prodId: 10 * i + j + 1
      };
      prodColors.push(color2);
    }
    await Colors.bulkCreate(prodColors, {returning: false})
  }
}
colors()

// fs.writeFileSync('colors.json', JSON.stringify(colors));

// for (let i = 0; i < 4000; i++) {
//   const items = Array.from({ length: 1000 }).map((_) => ({ tenant_id: faker.random.uuid() }));
//   await Item.bulkCreate(items, { benchmark: true, returning: false });
// }


