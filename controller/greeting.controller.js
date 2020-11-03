const Greeting = require('../models/greeting.model.js')
/*************************************************************************************
 * @description Following code is used to post data on database
 * NOTES - Create new Greeting Message
 *************************************************************************************/
exports.create = (req, res) => {
    if(!req.body.message){
        return res.status(400).send({message: "Note content can not be empty"});
    
    }
    const greeting = new Greeting({
        name: req.body.name || "Name Needed",
        message: req.body.message
    });
    greeting.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err.message || "Error Occurred while creating Greeting"});
    });
}; 

/*************************************************************************************
 * @description Following code is used to get data from database
 * NOTES - Retriving Greeting Message from database
 *************************************************************************************/
exports.findAll = (req, res) => {
    Greeting.find()
    .then(greeting => {
        res.send(greeting);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error Occurred while retriving all Greeting"
        });
    });
}; 