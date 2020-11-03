const Greeting = require('../models/greeting.model.js')
/*************************************************************************************
 * @description Following code is used to post code on data base
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