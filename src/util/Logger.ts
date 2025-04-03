import { bold, blueBright, yellow, red, magenta } from "chalk"

/**
 * Simple logging class with timestamps and cool color formatting
 */
export class Logger {
  private static timestamp(): string {
    const now = new Date()

    const pad = (num: number, size: number) => num.toString().padStart(size, "0")

    const hours = pad(now.getHours(), 2)
    const minutes = pad(now.getMinutes(), 2)
    const seconds = pad(now.getSeconds(), 2)
    const milliseconds = pad(now.getMilliseconds(), 3)

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  static info(...args: any[]) {
    console.info(bold(blueBright(`[${this.timestamp()}] [INFO]`, ...args)))
  }

  static warn(...args: any[]) {
    console.warn(yellow(`[${this.timestamp()}] [WARN]`, ...args))
  }

  static error(...args: any[]) {
    console.error(red(`[${this.timestamp()}] [ERROR]`, ...args))
  }

  static debug(...args: any[]) {
    if (process.env.DEBUG === "true") {
      console.debug(magenta(`[${this.timestamp()}] [DEBUG]`, ...args))
    }
  }
}