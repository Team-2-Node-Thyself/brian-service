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

module.exports.connection;