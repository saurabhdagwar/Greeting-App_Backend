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

 /*************************************************************************************
 * @description Dependencies need to be installed before execution of file 
 * 1. Express    2. mongoose     3. mongodb      4. body-parser
 * 
**************************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');

/*************************************************************************************
 * @constant app defines express given below
 *************************************************************************************/
 const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

/*************************************************************************************
 * @description given path defines databaseconfig.js file which connects with database
 *************************************************************************************/
 require('./config/databaseconfig.js');

 /*************************************************************************************
  * @description Following code will give resposce for server is connected or not 
 *************************************************************************************/
 app.get('/', (req, res) => {
    res.json({"message": "Welcome To Greeting Application "});
});
app.listen(4000, () => {
        console.log("Server is listening on port 4000");
});