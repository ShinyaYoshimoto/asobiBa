import type {OpenAPIHono} from '@hono/zod-openapi';
import {HandsGetHander} from './handler';
import {handsGetRoute} from './route';

export const handsGet = (app: OpenAPIHono) => app.openapi(handsGetRoute, new HandsGetHander().execute);
