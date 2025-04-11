import {createRoute} from '@hono/zod-openapi';
import {responseBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要（何ができるか）
- タグの一覧を取得します

## 挙動（どのように行うか）
- 全件取得します

## 前提（何が必要か）
- なし

## その他・補足
- 現時点では全件取得するAPIとして実装しています
`;

export const listTagsGetRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'タグの一覧を取得します',
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
