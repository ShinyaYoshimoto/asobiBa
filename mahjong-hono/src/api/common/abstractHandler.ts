import {Context} from 'hono';
import {HandlerInterface} from './handlerInterface';
import {basicLogger, loggerInterface} from '../../utils/logger';

export abstract class AbstractHandler implements HandlerInterface {
  protected logger: loggerInterface;
  protected constructor(dep?: { logger?: loggerInterface }) {
    this.logger = dep?.logger ?? new basicLogger();
  }
  abstract execute: (c: Context) => Promise<Response>;
}
