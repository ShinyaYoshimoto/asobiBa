import type {OpenAPIHono} from '@hono/zod-openapi';
import {PhotosDescriptionPostHandler} from './handler';
import {photosDescriptionPostRoute} from './route';

export const photosDescriptionPost = (app: OpenAPIHono) =>
  app.openapi(photosDescriptionPostRoute, new PhotosDescriptionPostHandler().execute);
