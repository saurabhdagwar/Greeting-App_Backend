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

/**
 * @param {object} app as an express which uses bodyparser with json format
 * 
 **/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** 
 * @module config.js file which connects with database
 * @module routes.js uses express app to call all functions
 **/
require("./config/config.js");
require("./routes/routes.js")(app);

/** 
 * @method get it simply used to return message
 * @method listen it used to listen 4000 port for connection
 **/
app.get("/", (res) => {
  res.json({ message: "Welcome To Greeting Application " });
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
