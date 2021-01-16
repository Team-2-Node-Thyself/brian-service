const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./database');
// const { getProduct } = require('./database'); // if I end up only using one function in my database,I will uncomment this line.

const PORT= 8080;
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/product/:id', (req, res) => {
    let _id = req.params.id;
    db.getProduct(_id, (err, result) => {
        if(err){
            console.log(`Error happened when retrieving from database: ${err}`);
            res.sendStatus(404);
        } else if(result) {
            res.status(200).json(result);
        } else {
            console.log(`Something went wrong when retrieving from database`);
            res.sendStatus(500);
        }
    });
});

app.listen(PORT, ()=> {
    console.log(`Server listening to http://localhost:${PORT}`);
})