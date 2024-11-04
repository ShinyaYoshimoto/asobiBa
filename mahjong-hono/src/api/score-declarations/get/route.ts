import {createRoute} from '@hono/zod-openapi';
import {responseBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要（何ができるか）
- 正誤を判定した点数申告の一覧を取得します

## 挙動（どのように行うか）
- 最新の判定結果から順に取得します

## 前提（何が必要か）
- なし

## その他・補足
- なし
`;

export const scoresDeclarationsGetRoute = createRoute({
  method: 'get',
  path: '/score-declarations',
  tags: ['ScoresDeclarations'],
  summary: '正誤を判定した点数申告の一覧を取得します',
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
