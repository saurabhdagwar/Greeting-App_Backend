/***********************************************************************************
 * Execuation   : cmd> node server.js  cmd> nodemon
 * Purpose      : Connect with local server and Mongodb
 * @file        : server.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 03/11/2020
 *************************************************************************************/

const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const cors = require('cors');

/**
 * @param {object} app as an express which uses bodyparser with json format 
 */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

/** 
 * @module config.js file which connects with database
 * @module routes.js uses express app to call all functions
 */
require('dotenv/config');
require("./config/db.js");
require("./routes/greeting.js")(app);

/**
 * @method get it simply used to return message
 * @method listen it used to listen 4000 port for connection
 */
app.get("/", (req,res) => {
  res.json({ "message": "Welcome To Greeting Application " });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
