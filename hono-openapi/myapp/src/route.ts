import {createRoute} from '@hono/zod-openapi';
import {ErrorSchema, PrefectureParamSchema, PrefectureSchema, PrefecturesSchema} from './schema';

export const prefectureRoute = createRoute({
  method: 'get',
  path: '/prefectures/{prefectureId}',
  request: {
    params: PrefectureParamSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PrefectureSchema,
        },
      },
      description: 'Returns a single prefecture by ID',
    },
    400: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: 'Bad Request',
    },
    404: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: 'Not Found',
    },
  },
});

export const prefecturesRoute = createRoute({
  method: 'get',
  path: '/prefectures',
  request: {},
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PrefecturesSchema,
        },
      },
      description: 'Returns a list of prefectures',
    },
  },
});
