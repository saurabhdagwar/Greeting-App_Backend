/***********************************************************************************
 * Purpose      : Following Programs defines Schema
 * @file        : model.js
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
    name: String,
    message: String,
  },
  {
    timestamps: true,
  }
);
let Schema = mongoose.model("Greeting", GreetingSchema);

class model {

  /** 
   * @function pushData Save Greeting Data on Database
   * @var {Object} schema is used to take data from server call save method
  **/
  pushData = (data, callback) => {
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
   * @function getData retrive all data from database
   **/
  getData = (callback) => {
    Schema.find(function (err, greeting) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, greeting);
    });
  };

  /**
   * @function putData update data according with ID from database
   **/
  putData = (greetingId, data, callback) => {
    mongoose.set("useFindAndModify", false);
    Schema.findByIdAndUpdate(greetingId, data, function (err) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  };

  /**
   * @function deleteData delete data having given ID
   **/
  deleteData = (greetingId, callback) => {
    mongoose.set("useFindAndModify", false);
    Schema.findByIdAndRemove(greetingId, function (err) {
      if (err) {
        return callback(err);
      }
      return callback(null);
    });
  };
}

module.exports = new model();
