const db = require('./server/database/index');
const faker = require('faker/locale/en_US');
let i = 0;

let queryStr = "INSERT INTO product (product_name, price, color, stock, discount) VALUES (?,?,?,?,?)";
let product = [[
        "Wacky Fish",
        57,
        "green",
        20,
        20
    ], [
        "Wacky Fish",
        57,
        "blue",
        0,
        20
    ], [
        "Wacky Fish",
        57,
        "red",
        11,
        20
    ], [
        "Wacky Fish",
        57,
        "yellow",
        37,
        20
    ], [
        "Wacky Fish",
        57,
        "purple",
        18,
        20
    ]];
product.forEach((ele) => {
    db.query(queryStr, ele, (err, results) => {
        if(err) {
            console.error(`An error occurred seeding the database ${err}`);
        } else {
            console.log(`data created on row ${results.insertId}`);
        }
    })
})
for(i = 6; i < 101; i++) {
    let newproduct = [
        faker.commerce.productName(),
        faker.finance.amount(10,300,2),
        faker.commerce.color(),
        Math.floor(Math.random() * 300),
        Math.floor(Math.random() * 80)
    ]
    db.query(queryStr, newproduct, (err, results) => {
        if(err) {
            console.error(`An error occurred seeding the database ${err}`);
        } else {
            console.log(`data created on row ${results.insertId}`);
        }
    })
}

process.exit;