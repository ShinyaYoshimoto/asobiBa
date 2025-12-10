import {Context} from 'hono';

export interface HandlerInterface {
  execute: (c: Context) => Promise<Response>;
}