import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema, requestBodySchema, responseBodySchema} from './schema';

export const scoresCalculateRoute = createRoute({
  method: 'post',
  path: '/scores/calculate',
  tags: ['scores'],
  summary: '点数計算',
  description: `点数計算\n\n
    符と飜数を入力して点数を計算します。`,
  request: {
    body: {
      content: {
        'application/json': {
          schema: requestBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: responseBodySchema,
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
  },
});
