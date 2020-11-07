/***********************************************************************************
 * Purpose      : Service should contains business logic
 * @file        : service.js
 * @author      : Saurabh Dagwar
 * @since       : 06/11/2020
 *************************************************************************************/

const model = require("../models/model.js");
class service {
  /*
   * creategreeting function which pass data towards model
   */
  createGreeting = (data, callback) => {
    model.pushData(data, function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /*
   * ReceiveGreeting function which pass data towards model
   */
  receiveGreeting = (callback) => {
    model.getData(function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /*
   * Update function which pass data towards model
   */
  updateGreeting = (greetingIdfun, greeting, callback) => {
    model.putData(greetingIdfun, greeting, function (err, greeting) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, greeting);
      }
    });
  };

  /*
   * deleteGreeting function which pass data towards model
   */
  deleteGreeting = (greetingId, callback) => {
    model.deleteData(greetingId, function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  };
}

module.exports = new service();
