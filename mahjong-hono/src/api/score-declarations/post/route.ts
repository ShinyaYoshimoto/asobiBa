import {createRoute} from '@hono/zod-openapi';
import {requestBodySchema, responseBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要（何ができるか）
- 点数申告の正誤を判定します

## 挙動（どのように行うか）
- 翻数は13、符は110までサポートします

## 前提（何が必要か）
- 親のアガり時の、親の支払い（自信の支払い）など、支払いが存在しない場合は0を指定してください

## その他・補足
- なし
`;

export const ScoresDeclarationsPostRoute = createRoute({
  method: 'post',
  path: '/score-declarations',
  tags: ['ScoresDeclarations'],
  summary: '点数申告の正誤を判定します',
  description,
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
    // TODO: 認証機能を入れた際に初めて利用するのでコメントアウト
    // 401: {
    //   description: 'Unauthorized',
    //   content: {
    //     'application/json': {
    //       schema: errorResponseSchema,
    //     },
    //   },
    // },
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
