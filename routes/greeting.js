/***********************************************************************************
 * Purpose      : Following Program is used to create, recieve, update and delete data from database
 * @file        : routs/greeting.js
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/
const controller = require("../controller/greeting.js");

/**
 * @method post Create a new Greeting
 * @method get List all existing  Greeting
 * @method put edit Greeting
 * @method delete Create perticular Greeting
 */
module.exports = (app) => {
  app.post("/greeting", controller.createGreeting);
  app.get("/greeting", controller.receiveGreeting);
  app.put("/greeting/:greetingId", controller.updateGreeting);
  app.delete("/greeting/:greetingId", controller.deleteGreeting);
};
