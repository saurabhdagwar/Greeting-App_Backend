/***********************************************************************************
 * Purpose      : Following Program is used to create, recieve, update and delete data from database
 * @file        : greeting.routs.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/
const controller = require("../controller/controller.js");

module.exports = (app) => {
  app.post("/greeting", controller.createGreeting);
  app.get("/greeting", controller.receiveGreeting);
  app.put("/greeting/:greetingId", controller.updateGreeting);
  app.delete("/greeting/:greetingId", controller.deleteGreeting);
};
