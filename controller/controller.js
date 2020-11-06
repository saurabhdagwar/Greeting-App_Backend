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
/*************************************************************************************
 * @description Following code is used to post data on database
 * NOTES - Create new Greeting Message
 *************************************************************************************/
exports.create = (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({ message: "Note content can not be empty" });
  }
  const greeting = {
    name: req.body.name,
    message: req.body.message,
  };
  service.create(greeting, function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error Occurred while creating Greeting",
      });
    } else {
      res.send(data);
    }
  });
};

/*************************************************************************************
 * @description Following code is used to get data from database
 * NOTES - Retriving Greeting Message from database
 *************************************************************************************/

exports.findAll = (req, res) => {
  service.receive(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error Occurred while retriving all Greeting",
      });
    } else {
      res.send(data);
    }
  });
};

/*************************************************************************************
 * @description Following code is used to update data from database
 * NOTES - Updating Greeting Message from database
 *************************************************************************************/

exports.update = (req, res) => {
  if ( !req.body.name) {
    return res.status(400).send({
      message: "Greeting Name Cannot be Empty",
    });
  }
  greetingId = req.params.greetingId;
  if (!greetingId) {
    return res.send({ message: "Greeting Id is invalid" });
  }
  const greeting = {
    name: req.body.name || "Name Required",
    message: req.body.message,
  };
  service.update(greetingId, greeting, function (err, data) {
    if (err) {
      return res.status(404).send({
        message: "Greeting Not found with id: " + req.params.greetingId,
      });
    } else if (data) {
      res.send(greeting);
    } else {
      return res.status(500).send({
        message: "Error Updating Greeting with Id: " + req.params.greetingId,
      });
    }
  });
};
/*************************************************************************************
 * @description following code is used to delete data from database
 * NOTES - Delete greeting messages from server
 *************************************************************************************/
exports.delete = (req, res) => {
  let greetingId = req.params.greetingId;
  if (!greetingId) {
    return res.send({ message: "Greeting Id is invalid " });
  }
  service.remove(greetingId, function (err) {
    if (err) {
      return res.status(404).send({
        message:
          "Error occured while deleting Greeting of GreetingId: " +
          req.params.greetingId,
      });
    }
    return res.send({ message: "Greeting Message Deleted Successfully" });
  });
};
