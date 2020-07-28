import {format} from 'util';
import {RawLogEvent} from "./events";
import {getAllLogEventListeners, getAllRawLogEventListeners} from "./handlers";
import {isLevelEnabled, LogLevel} from "./level";



/////////////////////////////////
// Logging

const rawLog = (rawLogEvent: RawLogEvent) => {
  // Fire raw observers
  getAllRawLogEventListeners().forEach( it => it(rawLogEvent));

  if (isLevelEnabled(rawLogEvent.level)) {
    // Generate message
    const [head, ...tail] = rawLogEvent.args;
    const message =
      (rawLogEvent.group ? `${rawLogEvent.group}: ` : '') +
      (head ? format(head, ...tail) : '');
    getAllLogEventListeners().forEach( it => it({
      level: rawLogEvent.level,
      message,
    }) );
  }
};

export const logFactory = (group?: string) => {
  return {
    debug: (...args: any[]) => rawLog({level: LogLevel.DEBUG, args, group}),
    info: (...args: any[]) => rawLog({level: LogLevel.INFO, args, group}),
    warn: (...args: any[]) => rawLog({level: LogLevel.WARN, args, group}),
    error: (...args: any[]) => rawLog({level: LogLevel.ERROR, args, group}),
  };
};

const defaultLogger = logFactory();

export const logDebug = (...args: any[]) => defaultLogger.debug(...args);
export const logInfo = (...args: any[]) => defaultLogger.info(...args);
export const logWarn = (...args: any[]) => defaultLogger.warn(...args);
export const logError = (...args: any[]) => defaultLogger.error(...args);

