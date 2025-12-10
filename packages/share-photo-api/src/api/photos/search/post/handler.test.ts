import app from '../../../../app';
import {Photo} from '../../../../modules/photo/photo.entity';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';

jest.mock('../../../../modules/photo/photo.query.postgres');

describe('POST /photos/search', () => {
  describe('正常系', () => {
    beforeEach(() => {
      (PhotoQueryPostgres.prototype.list as jest.Mock).mockClear();
    });
    it('オプションの指定なし', async () => {
      // Arrange

      // モックの実装
      (PhotoQueryPostgres.prototype.list as jest.Mock).mockResolvedValue([
        Photo.reconstruct({
          id: '1',
          fileName: 'test.jpg',
          date: new Date(),
          tags: [{id: '1', name: 'test'}],
          description: 'test',
        }),
      ]);

      // Action
      const response = await app.request('/photos/search', {
        method: 'POST',
        body: JSON.stringify({
          option: {
            limit: 20,
            date: new Date().toISOString(),
            tag_id: '1',
            last_id: '1',
          },
        }),
      });

      const result = await response.json();

      // Assert
      expect(result[0].id).toBe('1');
      // expect(result[0].url).toBe('https://storage.googleapis.com/mite-min-sai/test.jpg');
    });
  });
});
