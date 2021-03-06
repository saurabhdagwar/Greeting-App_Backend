/***********************************************************************************
 * Purpose      : Following Programs having all methods of CRUD operatios
 * @file        : controller/greeting.js
 * @module      : 1. servise
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

const service = require("../service/greeting.js");
const joi = require("joi");
const logger = require("../logger.js");
/**
 * @function validateSchema it validates request data according with JOI validation
 * @var {String} name must required length between five to twenty character
 * @var {String} message must required minimum length five character
 */
validateSchema = (data) => {
  const schema = joi.object({
    name: joi.string().min(4).max(20).required(),
    message: joi.string().min(5).required(),
  });
  return schema.validate(data);
};

class controller {
  /**
   * @description call the service createGreting method with callback 
   * @function createGreeting is used to handle request and response to create Greeting
   **/
  createGreeting = (req, res) => {
    const result = {};
    const { error } = validateSchema(req.body);
    if (error) {
      result.success = false;
      //result.data = error;
      result.message = "Greeting Content Cannot in Proper format";
      res.status(400).send(result);
      logger.error(result.message);
    } else {
      service.createGreeting(req.body, (err, data) => {
        if (data == "") {
          result.success = false;
          //result.data = err;
          result.message = "Error Occurred while creating Greeting";
          res.status(500).send(result);
          logger.error(result.message);
        } else {
          result.success = true;
          result.data = data;
          result.message = "Successfully Created Gretting";
          res.send(result);
          logger.info(result.message);
        }
      });
    }
  };

  /**
   * @description call the service receiveGreeting method with callback and created responce
   * @function receiveGreeting is used to handle request and response to retrive greeting
   **/
  receiveGreeting = (req, res) => {
    const result = {};
    service.receiveGreeting((err, data) => {
      if (err) {
        result.success = false;
        //result.data = err;
        result.message = "Error Occurred while retriving all Greetings";
        res.status(500).send(result);
        logger.error(result.message);
      } else if (data == "") {
        result.success = true;
        result.message = "There is no data in database ";
        res.send(result);
        logger.info(result.message);
      } else {
        result.success = true;
        result.data = data;
        result.message = "Successfully Recieve all Greetings ";
        res.send(result);
        logger.info(result.message);
      }
    });
  };

  /**
   *@function updateGreeting is used to handle request and response to edit greeting information
   * @var GreetingId defines greeting ID
   * @method updateGreeting call the service update method with callback function
   **/
  updateGreeting = (req, res) => {
    const result = {};
    let greetingId = req.params.greetingId;
    const { error } = validateSchema(req.body);
    if (error) {
      result.success = false;
      //result.data = error;
      result.message = "Greeting Content Cannot in Proper format";
      res.status(400).send(result);
      logger.error(result.message);
    } else {
      if (!greetingId) {
        result.success = false;
        //result.data = err;
        result.message = "Greeting Id is invalid";
        res.send(result);
        logger.error(result.message);
      }
      const greeting = {
        name: req.body.name || "Name Required",
        message: req.body.message,
      };
      service.updateGreeting(greetingId, greeting, (err, data) => {
        if (err) {
          result.success = false;
          //result.data = err;
          result.message =
            "Greeting Not found with id: " + req.params.greetingId;
          res.status(404).send(result);
          logger.error("Greeting Not found with id: " + req.params.greetingId);
        } else if (data) {
          result.success = true;
          result.data = greeting;
          result.message = `Successfully Updated Greeting with Greeting ID: ${req.params.greetingId}`;
          res.send(result);
          logger.info(result.message);
        } else {
          result.success = false;
          //result.data = err;
          result.message =
            "Error Updating Greeting with Id: " + req.params.greetingId;
          res.status(500).send(result);
          logger.error(result.message);
        }
      });
    }
  };

  /**
   * @function deleteGreeting is used to handle request and response to delete Greeting
   * @var GreetingId defines greeting ID
   * @method deleteGreeting call the service delete method with callback
   **/
  deleteGreeting = (req, res) => {
    const result = {};
    let greetingId = req.params.greetingId;
    if (!greetingId) {
      result.success = false;
      //result.data = err;
      result.message = "Greeting Id is invalid " + req.params.greetingId;
      res.send(result);
      logger.error(result.message);
    }
    service.deleteGreeting(greetingId, (err) => {
      if (err) {
        result.success = false;
        //result.data = err;
        result.message =
          "Error occured while deleting Greeting of GreetingId: " +
          req.params.greetingId;
        res.send(result);
        logger.error(result.message);
      }
      else{
      result.success = true;
      result.message = "Greeting Message Deleted Successfully";
      res.send(result);
      logger.info(result.message);
    }
  }
  );
  };
}
module.exports = new controller();
