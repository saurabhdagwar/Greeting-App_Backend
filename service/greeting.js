/***********************************************************************************
 * Purpose      : Service should contains business logic
 * @file        : service/greeting.js
 * @module      : model.js
 * @author      : Saurabh Dagwar
 * @since       : 06/11/2020
 *************************************************************************************/

const model = require("../models/greeting.js");
class service {

  /** 
   * @description calls model according with function
   * @function createGreeting function which pass data towards model method
   */
  createGreeting = (data, callback) => {
    model.createGreeting(data, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /**
   * @description recived call from controller and call model method according with callback
   * @function ReceiveGreeting which pass data towards model
   */
  receiveGreeting = (callback) => {
    model.receiveGreeting((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /**
   * @description recived data from controller and call call model updateGreeting method
   * @function updateGreeting  which pass data towards model
   */
  updateGreeting = (greetingIdfun, greeting, callback) => {
    model.updateGreeting(greetingIdfun, greeting, (err, greeting) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, greeting);
      }
    });
  };

  /**
   * @description recived ID from controller and call model deleteGreeting method
   * @function deleteGreeting which pass data towards model
   */
  deleteGreeting = (greetingId, callback) => {
    model.deleteGreeting(greetingId, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  };
}

module.exports = new service();
