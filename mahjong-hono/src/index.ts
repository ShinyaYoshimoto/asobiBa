import {serve} from '@hono/node-server';
import {swaggerUI} from '@hono/swagger-ui';
import {OpenAPIHono} from '@hono/zod-openapi';
import {createRoute} from '@hono/zod-openapi';
import {z} from 'zod';

const app = new OpenAPIHono();

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
          "application/json": {
            schema: z.object({
              symbolCount: z.number(),
              fanCount: z.number(),
            }),
          }
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          "application/json": {
            schema: z.object({
              score: z.number(),
            }),
          },
        },
      },
    },
  }),
  async (c) => {
    const {symbolCount, fanCount} = await c.req.json();
    return c.json({score: symbolCount * fanCount});
  },
);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
