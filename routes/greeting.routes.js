/***********************************************************************************
 * Purpose      : Following Program is used to create, recieve, update and delete data from database
 * @file        : greeting.routs.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

module.exports = (app) => {
  const greeting = require("../controller/greeting.controller.js");
  app.post("/greeting", greeting.create);
  app.get("/greeting", greeting.findAll);
  app.put("/greeting/:greetingId", greeting.update);
  app.delete("/greeting/:greetingId", greeting.delete);
};
