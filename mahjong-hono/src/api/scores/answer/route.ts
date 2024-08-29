import {createRoute} from '@hono/zod-openapi';
import {requestBodySchema, responseBodySchema} from './schema';
import {errorResponseSchema} from '../common/schema';

export const scoresAnswerRoute = createRoute({
  method: 'post',
  path: '/scores/answer',
  tags: ['scores'],
  summary: '点数申告クイズの回答を記録する',
  description: `## 概要\n
    点数申告クイズの回答を記録する\n
    ## 前提\n
    - 符は110符まで`,
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
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
  },
});
