import {createRoute} from '@hono/zod-openapi';
import {responseBodySchema} from './schema';
import {errorResponseSchema} from '../../../common/schema';

export const scoresAnswersSummariesRoute = createRoute({
  method: 'get',
  path: '/scores/answers/summaries',
  tags: ['scores'],
  summary: '点数申告クイズの回答のサマリー取得する',
  description: `## 概要\n点数申告クイズの回答のサマリーを取得する`,
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