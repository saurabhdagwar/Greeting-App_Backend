/***********************************************************************************
 * Purpose      : Following Programs defines Schema
 * @file        : model/greeting.js
 * @module      : 1. mongoose  
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 05/11/2020
 *************************************************************************************/

const mongoose = require("mongoose");

/**
 * @param {object} GreetingSchema defines mongoose Schema to define structure of greeting
 * @var {String} name
 * @var {String} message 
 */

const GreetingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      length: {
        min: 4,
        max: 20
      }
    },
    message: {
      type: String,
      required: true,
      length: {
        min: 5
      }
    },
  },
  {
    timestamps: true,
  }
);
let Schema = mongoose.model("Greeting", GreetingSchema);

class model {

  /**
   * @description recived data and call from service and use save method to create new greeting in database 
   * @function createGreeting Save Greeting Data on Database
   * @var {Object} schema is used to take data from server call save method
  **/
 createGreeting = (data, callback) => {
    const schema = new Schema({
      name: data.name,
      message: data.message,
    });
    schema
      .save()
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  };

  /**
   * @description recived call from service and use find method to list all data from database 
   * @function receiveGreeting retrive all data from database
   **/
  receiveGreeting = (callback) => {
    Schema.find((err, greeting) => {
      if (err) {
        callback(err, null);
      }
        callback(null, greeting);
    });
  };

  /**
   * @description recived data from service and use findByIdAndUpdate method to update data from database using ID 
   * @function updateGreeting update data according with ID from database
   *   **/
  updateGreeting = (greetingId, data, callback) => {
  
    Schema.findByIdAndUpdate(greetingId, data, (err) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  };

  /**
   * @description recived data from service and use findByIdAndRemove method to delete schema from database using ID
   * @function deleteGreeting delete data having given ID
   **/
  deleteGreeting = (greetingId, callback) => {
  
    Schema.findByIdAndRemove(greetingId, (err) => {
      if (err) {
        return callback(err);
      }
      return callback(null);
    });
  };
}

module.exports = new model();
