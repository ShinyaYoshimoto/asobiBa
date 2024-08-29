import {createRoute} from '@hono/zod-openapi';
import {errorResponseBodySchema, requestBodySchema, responseBodySchema} from './schema';

export const scoresAnswerRoute = createRoute({
  method: 'post',
  path: '/scores/answer',
  tags: ['scores'],
  summary: '点数計算クイズの回答を記録する',
  description: '## 概要\n点数計算クイズの回答を記録する',
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
          schema: errorResponseBodySchema,
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: errorResponseBodySchema,
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: errorResponseBodySchema,
        },
      },
    },
  },
});