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
/**
 * @description Following dependencies need to be installed before execution of file
 **/
const express = require("express");
const bodyParser = require("body-parser");
const { deleteGreeting } = require("./service/service.js");

/**
 * @description app defines express given below
 **/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** 
 *  @description given path defines databaseconfig.js file which connects with database
 **/
require("./config/config.js");
require("./routes/routes.js")(app);
/** 
 * @description Following code will give resposce for server is connected or not
 **/
app.get("/", (res) => {
  res.json({ message: "Welcome To Greeting Application " });
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
