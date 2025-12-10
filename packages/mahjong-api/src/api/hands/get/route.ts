import {createRoute} from '@hono/zod-openapi';
import {responseBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要（何ができるか）
- Mリーグで認められているアガリ役の一覧を取得します

## 挙動（どのように行うか）
- なし

## 前提（何が必要か）
- なし

## その他・補足
- 門前役で鳴きありの場合には、役が付かない為、0を返します
`;

export const handsGetRoute = createRoute({
  method: 'get',
  path: '/hands',
  tags: ['Hands'],
  summary: '有効な全ての役を取得します',
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
