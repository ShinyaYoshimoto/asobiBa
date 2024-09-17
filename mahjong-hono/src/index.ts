import {serve} from '@hono/node-server';
import {basicLogger} from './utils/logger';
import app from './app';

// FIXME: ENVからportを取得
const port = 8080;
const logger = new basicLogger();

console.log('hoge')
logger.info(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
