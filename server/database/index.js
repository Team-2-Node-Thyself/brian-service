const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bullseye'
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to the database: ${err}`);
  } else {
    console.log('Connected to local mySQL database');
  }
});

const getProduct = (id, cb) => {
  let queryStr = 'select * from product where id = ?';
  connection.query(queryStr, id, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

const getProductColor = (id, color, cb) => {
  // let queryStr = 'select color from product where id = ?';
  getProduct(id, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      let queryStr = 'select color, stock from product where product_name = ? AND color != ?';
      connection.query(queryStr, [result[0].product_name, color], (err, result) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, result);
        }
      });
    }
  });
};

module.exports = {
  getProduct,
  getProductColor
};