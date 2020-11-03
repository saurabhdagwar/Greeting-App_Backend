/*************************************************************************************
 * Following Program is used to create and recieve data from database
 *************************************************************************************/
module.exports = (app) => {
    const greeting = require('../controller/greeting.controller.js');
    app.post('/greeting',greeting.create);
    app.get('/greeting',greeting.findAll);
}