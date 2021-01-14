const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./database');

const PORT= 8080;
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.listen(PORT, ()=> {
    console.log(`Server listening to http://localhost:${PORT}`);
})