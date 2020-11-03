/*************************************************************************************
 * Following Program is used to create, recieve, update and delete data from database
 *************************************************************************************/
module.exports = (app) => {
    const greeting = require('../controller/greeting.controller.js');
    app.post('/greeting',greeting.create);
    app.get('/greeting',greeting.findAll);
    app.put('/greeting/:greetingId',greeting.update);
    app.delete('/greeting/:greetingId',greeting.delete);
}
