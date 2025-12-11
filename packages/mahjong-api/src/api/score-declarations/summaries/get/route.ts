import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {responseBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 正誤を判定した点数申告のサマリーを取得します

## 挙動（どのように行うか）
- 翻数の小さい順かつ、符数の小さい順にサマリーを取得します

## 前提（何が必要か）
- なし

## その他・補足
- なし
`;

export const scoresDeclarationsSummariesGetHandlerRoute = createRoute({
  method: 'get',
  path: '/score-declarations/summaries',
  tags: ['ScoresDeclarations'],
  summary: '正誤を判定した点数申告のサマリーを取得します',
  description,
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
