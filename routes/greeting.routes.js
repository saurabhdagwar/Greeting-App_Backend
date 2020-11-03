/*************************************************************************************
 * Following Program is used to create new database
 *************************************************************************************/
module.exports = (app) => {
    const greeting = require('../controller/greeting.controller.js');
    app.post('/greeting',greeting.create);
}