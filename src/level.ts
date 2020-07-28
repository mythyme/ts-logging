/////////////////////////////////
// Log Level
export const enum LogLevel {
  SILENT,
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

let outputLogLevel = LogLevel.DEBUG;

export const setOutputLogLevel = (lvl: LogLevel) => {
  outputLogLevel = lvl;
};
export const getOutputLogLevel = () => outputLogLevel;

export const isLevelEnabled = (lvl: LogLevel) =>
  outputLogLevel > LogLevel.SILENT && lvl <= outputLogLevel;
