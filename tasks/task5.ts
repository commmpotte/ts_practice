abstract class Logger {
  abstract logMessage(message: string): void

  printDate(date: Date) {
    this.logMessage(date.toString())
  }
}

class MyLogger extends Logger {
  logMessage(message: string): void {
    console.log(message)
  }

  logWithDate(message: string): void {
    this.printDate(new Date())
    this.logMessage(message)
  }
}

const logger = new MyLogger()
logger.logWithDate('My message is here')
