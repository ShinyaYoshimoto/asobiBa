import {beforeEach, describe, expect, it} from 'vitest';
import {db} from '@asobiba/common';
import app from '../../../app';

describe('GET /tags', () => {
  let accountId: string;

  beforeEach(async () => {
    // テスト用のアカウントを作成
    const account = await db.account.create({data: {}});
    accountId = account.id;
  });

  describe('正常系', () => {
    it('タグ一覧を取得できること', async () => {
      // Arrange
      await db.tag.create({
        data: {
          accountId,
          name: 'テストタグ1',
        },
      });
      await db.tag.create({
        data: {
          accountId,
          name: 'テストタグ2',
        },
      });

      // Act
      const response = await app.request('/tags', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('テストタグ1');
      expect(result[1].name).toBe('テストタグ2');
    });

    it('タグが存在しない場合は空配列を返すこと', async () => {
      // Act
      const response = await app.request('/tags', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result).toHaveLength(0);
      expect(result).toEqual([]);
    });
  });
});
