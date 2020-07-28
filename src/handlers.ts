
/////////////////////////////////
// Log Event Handlers

import {LogEvent, RawLogEvent} from "./events";

export interface EventListener<T> {
  (event: T): void;
}

function makeHandler<E>() {
  let handlers: EventListener<E>[] = [];
  return {
    add: (handler: EventListener<E>) => handlers.push(handler),
    remove: (handler: EventListener<E>) =>
      (handlers = handlers.filter(it => it !== handler)),
    removeAll: () => (handlers = []),
    getAll: () => [...handlers]
  };
}

const rawLogHandling = makeHandler<RawLogEvent>();
const logHandling = makeHandler<LogEvent>();

export const addRawLogEventListener = rawLogHandling.add;
export const removeRawLogEventListener = rawLogHandling.remove;
export const removeAllRawLogEventListeners = rawLogHandling.removeAll;
export const getAllRawLogEventListeners = rawLogHandling.getAll;

export const addLogEventListener = logHandling.add;
export const removeLogEventListener = logHandling.remove;
export const removeAllLogEventListeners = logHandling.removeAll;
export const getAllLogEventListeners = logHandling.getAll;
