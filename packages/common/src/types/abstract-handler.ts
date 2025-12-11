import type {Context} from 'hono';
import {basicLogger, type loggerInterface} from '../utils/logger';
import type {HandlerInterface} from './handler';

export abstract class AbstractHandler implements HandlerInterface {
  protected logger: loggerInterface;
  protected constructor(dep?: {logger?: loggerInterface}) {
    this.logger = dep?.logger ?? new basicLogger();
  }
  abstract execute: (c: Context) => Promise<Response>;
}
