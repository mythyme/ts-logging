//////////////////////////////
// Built in log listeners

import {LogEvent, RawLogEvent} from "./events";
import {LogLevel} from "./level";
import {
  addLogEventListener,
  addRawLogEventListener,
  removeLogEventListener,
  removeRawLogEventListener
} from "./handlers";

const CONSOLE_LOG_LISTENER_RAW = (rawEvent: RawLogEvent) => {
  // TODO - handle group ?
  switch (rawEvent.level) {
    case LogLevel.DEBUG:
      console.debug(...rawEvent.args);
      break;
    case LogLevel.INFO:
      console.log(...rawEvent.args);
      break;
    case LogLevel.WARN:
      console.warn(...rawEvent.args);
      break;
    case LogLevel.ERROR:
      console.error(...rawEvent.args);
      break;
    case LogLevel.SILENT:
      break;
  }
};

const CONSOLE_LOG_LISTENER = (event: LogEvent) => {
  switch (event.level) {
    case LogLevel.DEBUG:
      console.debug(event.message);
      break;
    case LogLevel.INFO:
      console.log(event.message);
      break;
    case LogLevel.WARN:
      console.warn(event.message);
      break;
    case LogLevel.ERROR:
      console.error(event.message);
      break;
    case LogLevel.SILENT:
      break;
  }
};


/////////////////

export const addConsoleLogging = () => addLogEventListener(CONSOLE_LOG_LISTENER)
export const removeConsoleLogging = () => removeLogEventListener(CONSOLE_LOG_LISTENER)

export const addRawConsoleLogging = () => addRawLogEventListener(CONSOLE_LOG_LISTENER_RAW)
export const removeRawConsoleLogging = () => removeRawLogEventListener(CONSOLE_LOG_LISTENER_RAW)


