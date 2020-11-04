/***********************************************************************************
 * Purpose      : Following Programs defines Schema
 * @file        : greeting.model.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

const mongoose = require("mongoose");
const GreetingSchema = mongoose.Schema(
  {
    name: String,
    message: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Greeting", GreetingSchema);
