const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
require('./config/databaseconfig.js');
app.get('/', (req, res) => {
    res.json({"message": "Welcome To Greeting Application "});
});
app.listen(4000, () => {
        console.log("Server is listening on port 4000");
});