import {createRoute, z} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {requestBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 画像に設定されたタグを削除します

## 挙動（どのように行うか）
- 画像に設定されたタグを削除します

## 前提（何が必要か）
- 画像にタグが登録されている必要があります

## その他・補足
- なし
`;

export const photosTagsDeleteRoute = createRoute({
  method: 'delete',
  path: '/photos/tags',
  tags: ['Photos'],
  summary: '画像に設定されたタグを削除します',
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
