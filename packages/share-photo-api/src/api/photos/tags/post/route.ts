import {createRoute} from '@hono/zod-openapi';
import {errorResponseSchema} from '../../../common/schema';
import {requestBodySchema, responseBodySchema} from './schema';

const description = `
## 概要（何ができるか）
- 画像にタグを設定します

## 挙動（どのように行うか）
- タグが存在しない場合には作成の上、設定します

## 前提（何が必要か）
- 画像の登録がされている必要があります

## その他・補足
- なし
`;

export const photosTagsPostRoute = createRoute({
  method: 'post',
  path: '/photos/tags',
  tags: ['Photos'],
  summary: '画像にタグを設定します',
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
