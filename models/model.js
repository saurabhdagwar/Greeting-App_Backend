/***********************************************************************************
 * Purpose      : Following Programs defines Schema
 * @file        : model.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 05/11/2020
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
let Schema = mongoose.model("Greeting", GreetingSchema);

class model {
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

  getData = (callback) => {
    Schema.find(function (err, greeting) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, greeting);
    });
  };

  putData = (greetingId, data, callback) => {
    mongoose.set("useFindAndModify", false);
    Schema.findByIdAndUpdate(greetingId, data, function (err) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  };

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
