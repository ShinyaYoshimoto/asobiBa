import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';
import {createRoute} from '@hono/zod-openapi';
import {z} from 'zod';

const app = new OpenAPIHono({});

app.doc31('doc', {
  openapi: '3.1.0',
  info: {
    title: 'Mahjong API',
    version: '0.0.1',
  },
});

app.get('/ui', swaggerUI({url: '/doc'}));

// health check
app.get('/', c => {
  return c.text('Hello Hono!');
});

app.openapi(
  createRoute({
    method: 'post',
    path: '/scores/calculate',
    request: {
      body: {
        content: {
          'application/json': {
            schema: z.object({
              symbolCount: z.number(),
              fanCount: z.number(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.object({
              startPlayer: z.object({
                draw: z.object({
                  startPlayer: z.number().nullable(),
                  other: z.number(),
                }),
                other: z.number(),
              }),
              other: z.object({
                draw: z.object({
                  startPlayer: z.number(),
                  other: z.number(),
                }),
                other: z.number(),
              }),
            }),
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  }),
  async c => {
    const {symbolCount, fanCount} = await c.req.json();
    if (symbolCount < 20 || fanCount < 1) {
      return c.json({message: 'Symbol count must be 20 or more and fan count must be 1 or more'}, 400);
    }
    // FIXME: 30符1飜の値を決め打ち
    return c.json({
      startPlayer: {
        draw: {
          startPlayer: null,
          other: 500,
        },
        other: 1500,
      },
      other: {
        draw: {
          startPlayer: 500,
          other: 300,
        },
        other: 1000,
      },
    }, 200);
  }
);

export default app;
