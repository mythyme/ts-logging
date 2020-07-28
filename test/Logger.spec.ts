import {
  addConsoleLogging,
  addRawConsoleLogging,
  logDebug,
  logError,
  logFactory,
  logInfo,
  logWarn,
  removeAllLogEventListeners,
  removeAllRawLogEventListeners,
} from '../src';

describe('Logging', () => {
  describe('General Raw Logging', () => {
    removeAllRawLogEventListeners();
    removeAllLogEventListeners();
    addRawConsoleLogging();

    it('info', () => {
      logInfo('I am a message');
    });
    it('debug', () => {
      logDebug('I am a debug message %s string', 'with a substitution');
    });
    it('warn', () => {
      logWarn('I am a warn message %d with number', 2);
    });
    it('error', () => {
      logError('I am a warn message %O with obj', {a: 1, b: 's'});
    });
  });

  describe('General Logging', () => {
    removeAllRawLogEventListeners();
    removeAllLogEventListeners();
    addConsoleLogging();

    it('info', () => {
      logInfo('I am a message');
    });
    it('debug', () => {
      logDebug('I am a debug message %s string', 'with a substitution');
    });
    it('warn', () => {
      logWarn('I am a warn message %d with number', 2);
    });
    it('error', () => {
      logError('I am a warn message %O with obj', {a: 1, b: 's'});
    });
  });

  describe('Group Logging', () => {
    removeAllRawLogEventListeners();
    removeAllLogEventListeners();
    addConsoleLogging();

    const logger = logFactory('TEST-MODULE');

    it('info', () => {
      logger.info('I am a message');
    });
    it('debug', () => {
      logger.debug('I am a debug message %s string', 'with a substitution');
    });
    it('warn', () => {
      logger.warn('I am a warn message %d with number', 2);
    });
    it('error', () => {
      logger.error('I am a warn message %O with obj', {a: 1, b: 's'});
    });
  });
});
