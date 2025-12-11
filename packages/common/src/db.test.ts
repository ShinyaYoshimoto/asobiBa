import {describe, expect, it} from 'vitest';
import {db} from './db';

describe('db', () => {
  describe('正常系', () => {
    it('PrismaClientのシングルトンインスタンスが取得できること', () => {
      // Act & Assert
      expect(db).toBeDefined();
      expect(db).toBe(db); // 同じインスタンスであることを確認
    });

    it('複数回importしても同じインスタンスが返されること', async () => {
      // Arrange
      const {db: db1} = await import('./db');
      const {db: db2} = await import('./db');

      // Act & Assert
      expect(db1).toBe(db2);
    });
  });
});
