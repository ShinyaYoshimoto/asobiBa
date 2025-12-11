import {beforeEach, describe, expect, it, vi} from 'vitest';
import app from '../../../app';
import {Tag} from '../../../modules/photo/tag/tag.entity';
import {TagQueryPostgres} from '../../../modules/photo/tag/tag.query.postgres';

vi.mock('../../../modules/photo/tag/tag.query.postgres');

describe('GET /tags', () => {
  describe('正常系', () => {
    beforeEach(() => {
      vi.mocked(TagQueryPostgres.prototype.list).mockClear();
    });

    it('タグ一覧を取得できること', async () => {
      // Arrange
      vi.mocked(TagQueryPostgres.prototype.list).mockResolvedValue([
        Tag.reconstruct({
          id: '1',
          name: 'テストタグ1',
        }),
        Tag.reconstruct({
          id: '2',
          name: 'テストタグ2',
        }),
      ]);

      // Act
      const response = await app.request('/tags', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('1');
      expect(result[0].name).toBe('テストタグ1');
      expect(result[1].id).toBe('2');
      expect(result[1].name).toBe('テストタグ2');
    });

    it('タグが存在しない場合は空配列を返すこと', async () => {
      // Arrange
      vi.mocked(TagQueryPostgres.prototype.list).mockResolvedValue([]);

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
