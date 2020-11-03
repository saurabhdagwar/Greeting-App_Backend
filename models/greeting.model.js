const mongoose = require('mongoose');
/*************************************************************************************
 * Schema for Greeting App
 *************************************************************************************/
const GreetingSchema = mongoose.Schema({
    name: String,
    message: String
},{
    timestamps: true
});
module.exports = mongoose.model('Greeting', GreetingSchema); 