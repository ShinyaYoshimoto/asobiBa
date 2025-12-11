import {serve} from '@hono/node-server';
import app from './app';
import {basicLogger} from './utils/logger';

const port = 8080;
const logger = new basicLogger();

logger.info(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
