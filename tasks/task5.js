"use strict";
class Logger {
    printDate(date) {
        this.logMessage(date.toString());
    }
}
class MyLogger extends Logger {
    logMessage(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.logMessage(message);
    }
}
const logger = new MyLogger();
logger.logWithDate('My message is here');
