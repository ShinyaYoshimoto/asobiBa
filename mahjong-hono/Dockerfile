FROM node:20-alpine3.20 AS base

# 環境変数を設定
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG GCS_SA_KEY_PATH
ENV GCS_SA_KEY_PATH=${GCS_SA_KEY_PATH}

ARG GCS_BUCKET_NAME
ENV GCS_BUCKET_NAME=${GCS_BUCKET_NAME}

ARG GCS_SA_KEY_OBJECT
ENV GCS_SA_KEY_OBJECT=${GCS_SA_KEY_OBJECT}

FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma ./prisma
COPY src ./src
RUN npm install -g pnpm@ && \
    pnpm install --no-frozen-lockfile && \
    pnpm run build && \
    pnpm prune --production

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 hono

COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/dist /app/dist
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json
COPY --from=builder --chown=hono:nodejs /app/prisma /app/prisma

# ARG DATABASE_URL
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG GCS_SA_KEY_PATH
ENV GCS_SA_KEY_PATH=${GCS_SA_KEY_PATH}

# GCS_SA_KEY_PATH名のファイルを生成する
ARG GCS_SA_KEY_OBJECT
ENV GCS_SA_KEY_OBJECT=${GCS_SA_KEY_OBJECT}
RUN echo ${GCS_SA_KEY_OBJECT} > /app/${GCS_SA_KEY_PATH}

ARG GCS_BUCKET_NAME
ENV GCS_BUCKET_NAME=${GCS_BUCKET_NAME}

# FIXME: 本番用のマイグレートはデプロイ時にやったほうがいいかな...
# RUN npx prisma migrate deploy

USER hono
EXPOSE 8080

CMD ["node", "/app/dist/index.js"]
