import { bold, blueBright, yellow, red, magenta } from "chalk"
import fs from "node:fs"

/**
 * Simple logging class with timestamps and cool color formatting
 */
export class Logger {
  private static logFile: string | null = null
  private static logDirectory = "./logs"

  private static timestamp(): string {
    const now = new Date()

    const pad = (num: number, size: number) => num.toString().padStart(size, "0")

    const hours = pad(now.getHours(), 2)
    const minutes = pad(now.getMinutes(), 2)
    const seconds = pad(now.getSeconds(), 2)
    const milliseconds = pad(now.getMilliseconds(), 3)

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  private static getFormattedDateTime(): string {
    const now = new Date()

    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")

    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const seconds = String(now.getSeconds()).padStart(2, "0")

    return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`
  }


  static init() {
    if (!this.logFile) {
      this.logFile = `${this.logDirectory}/log-${this.getFormattedDateTime()}.txt`
    }

    if (!fs.existsSync(this.logDirectory)) {
      fs.mkdirSync(this.logDirectory)
    }
  }

  static info(...args: any[]) {
    const message = `${this.timestamp()} [INFO] ${args.join(" ")}`
    console.info(bold(blueBright(message)))
    this.logToFile(message)
  }

  static warn(...args: any[]) {
    const message = `${this.timestamp()} [WARN] ${args.join(" ")}`
    console.warn(bold(yellow(message)))
    this.logToFile(message)
  }

  static error(...args: any[]) {
    const message = `${this.timestamp()} [ERROR] ${args.join(" ")}`
    console.error(bold(red(message)))
    this.logToFile(message)
  }

  static debug(...args: any[]) {
    const message = `${this.timestamp()} [DEBUG] ${args.join(" ")}`
    console.debug(bold(magenta(message)))
    this.logToFile(message)
  }

  private static logToFile(message: string) {
    if (!this.logFile) return
    try {
      fs.appendFileSync(this.logFile, `${message}\n`)
    } catch (error) {
      this.logFile = null // reset log file otherwise it will keep trying to write to the old one and infinitely fail
      this.error("Failed to write to log file:", error)
    }
  }
}

Logger.init()