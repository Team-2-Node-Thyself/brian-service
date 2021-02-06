const { Product, Colors } = require('./pgDatabase/model');
const products = require('./products.json');
const colors = require('./colors.json');




Product.bulkCreate(products, {return: false})
  .then(() => Colors.bulkCreate(colors, {return: false}))
  .catch(err => console.log(err));