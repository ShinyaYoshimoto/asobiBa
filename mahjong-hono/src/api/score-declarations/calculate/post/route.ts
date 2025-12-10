import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {requestBodySchema, responseBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 翻数と符数から点数を計算します

## 挙動（どのように行うか）
- 13翻以上は、13翻として計算します
- 符は20符から110符までサポートします
  - ただし、20符はツモ（平和）のみ有効です

## 前提（何が必要か）
- なし

## その他・補足
- なし
`;

export const scoresDeclarationsCalculatePostRoute = createRoute({
  method: 'post',
  path: '/scores-declarations/calculate',
  tags: ['ScoresDeclarations'],
  summary: '翻数と符数から点数を計算します',
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
