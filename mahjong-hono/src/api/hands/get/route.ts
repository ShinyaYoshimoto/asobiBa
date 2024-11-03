import {createRoute} from '@hono/zod-openapi';
import {responseBodySchema} from './schema';
import {errorResponseSchema} from '../../common/schema';

const description = `
## 概要
- Mリーグで認められているアガリ役の一覧を取得します
## 注意
- 門前役で鳴きありの場合には、役が付かない為、0を返します
`;

export const handsRoute = createRoute({
  method: 'get',
  path: '/hands',
  tags: ['hands'],
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
