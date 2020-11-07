/***********************************************************************************
 * Purpose      : Connects with database
 * @file        : config.js
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

const mongoose = require("mongoose");
/*
 *Following url is use for database it must be connected with database
 */
const url = "mongodb://localhost:27017/Greeting_database";
mongoose.Promise = global.Promise;

/*
 * Following program defines database is connected or not
 */
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
