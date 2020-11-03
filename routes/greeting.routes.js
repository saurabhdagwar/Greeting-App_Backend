/*************************************************************************************
 * Following Program is used to create, recieve and update data from database
 *************************************************************************************/
module.exports = (app) => {
    const greeting = require('../controller/greeting.controller.js');
    app.post('/greeting',greeting.create);
    app.get('/greeting',greeting.findAll);
    app.put('/greeting/:greetingId',greeting.update);
}