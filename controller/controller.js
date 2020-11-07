/***********************************************************************************
 * Purpose      : Following Programs having all methods of CRUD operatios
 * @file        : controller.js
 * @overview    : Check whether connected to local host or not
 * @module      : 1. Express    2. mongoose     3. mongodb      4. body-parser
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

const service = require("../service/service.js");
const result = {};
// Following code is used to post greeting on database
exports.create = (req, res) => {
  if (!req.body.message) {
    result.success = false;
    result.data = err;
    result.message =  "Note content can not be empty"
    return res.status(400).send(result);
  }
  const greeting = {
    name: req.body.name,
    message: req.body.message,
  };
  service.create(greeting, function (err, data) {
    if (err) {
      result.success = false;
      result.data = err;
      result.message =  "Error Occurred while creating Greeting"
      res.status(500).send(result);
    } else {
      result.success = true;
      result.data = data;
      result.message =  "Successfully Created Gretting"
      res.send(result);
    }
  });
};

// Following code is used receving greeting from database
exports.findAll = (req, res) => {
  service.receive(function (err, data) {
    if (err) {
      result.success = false;
      result.data = err;
      result.message =  "Error Occurred while retriving all Greeting"
      res.status(500).send(result);
    } else {
      result.success = false;
      result.data = err;
      result.message =  "Successfully Recieve all Greetings "
      res.send(result);
    }
  });
};

//Following code is used to update greeting from database
exports.update = (req, res) => {
  if ( !req.body.name) {
    result.success = false;
    result.data = err;
    result.message = "Greeting Name Cannot be Empty"
    res.status(400).send(result);
  }
  greetingId = req.params.greetingId;
  if (!greetingId) {
    result.success = false;
    result.data = err;
    result.message = "Greeting Id is invalid"
    res.send(result);
  }
  const greeting = {
    name: req.body.name || "Name Required",
    message: req.body.message,
  };
  service.update(greetingId, greeting, function (err, data) {
    if (err) {
      result.success = false;
      result.data = err;
      result.message = "Greeting Not found with id: " + req.params.greetingId
      res.status(404).send(result);
      
    } else if (data) {
      result.success = true;
      result.data = greeting;
      result.message = "Successfully Updated Greeting with Greeting ID: " + req.params.greetingId
      res.send(result);
    } else {
      result.success = false;
      result.data = err;
      result.message ="Error Updating Greeting with Id: " + req.params.greetingId
      res.status(500).send(result);
    }
  });
};

// following code is used to delete data from database
exports.delete = (req, res) => {
  let greetingId = req.params.greetingId;
  if (!greetingId) {
    result.success = false;
    result.data = err;
    result.message ="Greeting Id is invalid " + req.params.greetingId
    res.send(result);
  }
  service.remove(greetingId, function (err) {
    if (err) {
      result.success = false;
      result.data = err;
      result.message = "Error occured while deleting Greeting of GreetingId: " +req.params.greetingId
      res.send(result);
    }
    result.success = true;
    result.data = "Deleted: "+greetingId;
    result.message ="Greeting Message Deleted Successfully"
    res.send(result);
   
  });
};
