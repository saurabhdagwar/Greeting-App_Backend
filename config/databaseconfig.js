 const mongoose = require('mongoose');

 /*************************************************************************************
 * @description Following url is use for database it must be connected with database  
 *************************************************************************************/
 const url = 'mongodb://localhost:27017/Greetings';

mongoose.Promise = global.Promise;

/*************************************************************************************
 * @description following program defines database is connected or not
 *************************************************************************************/
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
