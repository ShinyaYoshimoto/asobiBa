import {PrismaClient} from './generated/client';

// NOTE: 開発時のホットリロード対策を考慮したシングルトン実装
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

const prisma = globalThis.__prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

export const db = prisma;
