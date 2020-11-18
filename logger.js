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
 * @description creating new logger using winston createLogger method and stored logs in error and info file
 */
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.File({
        filename: './logger/errors.log',
        level: 'error'
      }),
    new winston.transports.File({
      filename: './logger/info.log',
      level: 'info'
    })
  ]
});
module.exports = logger;
