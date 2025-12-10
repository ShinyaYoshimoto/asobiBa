import app from '../../../app';
import {Tag} from '../../../modules/photo/tag/tag.entity';
import {TagQueryPostgres} from '../../../modules/photo/tag/tag.query.postgres';

jest.mock('../../../modules/photo/tag/tag.query.postgres');

describe('GET /tags', () => {
  describe('正常系', () => {
    beforeEach(() => {
      (TagQueryPostgres.prototype.list as jest.Mock).mockClear();
    });

    it('タグ一覧を取得できること', async () => {
      // Arrange
      (TagQueryPostgres.prototype.list as jest.Mock).mockResolvedValue([
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
      (TagQueryPostgres.prototype.list as jest.Mock).mockResolvedValue([]);

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
