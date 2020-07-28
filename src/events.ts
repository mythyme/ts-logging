/////////////////////////////////
// Log Events

import {LogLevel} from './level';

export interface RawLogEvent {
  /**
   * Level of event logged.
   */
  level: LogLevel;
  /**
   * The raw arguments passed to the log call.
   */
  args: any[];
  /**
   * A string indicating the name of the package that made the log call,
   */
  group?: string;
}

export interface LogEvent {
  level: LogLevel;
  message: string;
}
