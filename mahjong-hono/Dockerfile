FROM node:20-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY ./prisma ./prisma
COPY ./src ./src
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
# ENV DATABASE_URL=${DATABASE_URL}
# なぜかうまくいかないが、まぁいいか。Firestore使う or Cloud SQLとか使うか...
ENV DATABASE_URL=file:/tmp/prisma/dev.db

RUN npx prisma migrate deploy

# 書き込みファイルはtmp以下に移動する
COPY --from=builder --chown=hono:nodejs /app/prisma /tmp/prisma

USER hono
EXPOSE 8080

CMD ["node", "/app/dist/index.js"]

