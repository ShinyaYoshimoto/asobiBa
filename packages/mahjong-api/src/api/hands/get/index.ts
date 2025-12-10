import { HandsGetHander } from './handler';
import { handsGetRoute } from './route';
import {OpenAPIHono} from '@hono/zod-openapi';

export const handsGet = (app: OpenAPIHono) => app.openapi(handsGetRoute, new HandsGetHander().execute);