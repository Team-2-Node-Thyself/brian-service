const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bullseye'
});

connection.connect((err) => {
    if(err) {
        console.error(`Error connecting to the database: ${err}`);
    } else {
        console.log('Connected to local mySQL database');
    }
})

const getProduct = (id, cb) => {
    let queryStr = 'select * from product where id = ?';
    connection.query(queryStr, id, (err, result) => {
        if(err) {
            cb(err, null);
        } else {
            cb(null, result);
        }
    });
};

module.exports = {
    getProduct = getProduct
};