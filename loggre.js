/***********************************************************************************
 * Purpose      : Following Program is used to log records
 * @file        : logger.js
 * @module      : winston
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/
const winston = require("winston");
/**
 * @description creating new logger using winston createLogger method
 * @description store all logs of level error in errors.lof file
 * @description store all logs of info level in executed.log file
 */
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "executed.log" , level:'info' }),
    new winston.transports.File({filename: 'errors.log', level: 'error' })
  ]
});
module.exports = {logger};
