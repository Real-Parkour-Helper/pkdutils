import { Logger } from "../src/util/Logger"

Logger.info("This is an info log!")
Logger.info("This is an info log!", "somedata", 1, 3, [1, 2, 3])

Logger.warn("This is a warn log!")
Logger.warn("This is a warn log!", "somedata", 1, 3, [1, 2, 3])

Logger.error("This is an error log!")
Logger.error("This is an error log!", "somedata", 1, 3, [1, 2, 3])

Logger.debug("This is a debug log!")
Logger.debug("This is a debug log!", "somedata", 1, 3, [1, 2, 3])
