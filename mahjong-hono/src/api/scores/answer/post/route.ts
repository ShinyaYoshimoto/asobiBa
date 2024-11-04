import {createRoute} from '@hono/zod-openapi';
import {requestBodySchema, responseBodySchema} from './schema';
import {errorResponseSchema} from '../../../common/schema';

const description = `
## 概要（何ができるか）
- 点数申告クイズの解答を記録します

## 挙動（どのように行うか）
- 13翻以上は、13翻として計算します
- 符は20符から110符までサポートします
  - ただし、20符はツモ（平和）のみ有効です

## 前提（何が必要か）
- 親のアガり時の、親の支払い（自信の支払い）など、支払いが存在しない場合は0を指定してください

## その他・補足
`;

export const scoresAnswerPostRoute = createRoute({
  deprecated: true,
  method: 'post',
  path: '/scores/answer',
  tags: ['scores'],
  summary: '点数申告クイズの回答を記録する',
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
