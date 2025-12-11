import {PrismaClient} from './generated/client';

// NOTE: 開発時のホットリロード対策を考慮したシングルトン実装
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;
