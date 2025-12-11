import {beforeEach, describe, expect, it, vi} from 'vitest';
import app from '../../../../app';
import {Photo} from '../../../../modules/photo/photo.entity';
import {PhotoQueryPostgres} from '../../../../modules/photo/photo.query.postgres';

vi.mock('../../../../modules/photo/photo.query.postgres');
vi.mock('@google-cloud/storage', () => {
  const mockGetSignedUrl = vi.fn().mockResolvedValue(['https://example.com/signed-url']);
  const mockFile = vi.fn().mockReturnValue({
    getSignedUrl: mockGetSignedUrl,
  });
  const mockBucket = vi.fn().mockReturnValue({
    file: mockFile,
  });
  const mockStorage = vi.fn().mockReturnValue({
    bucket: mockBucket,
  });

  return {
    Storage: mockStorage,
  };
});

describe('POST /photos/search', () => {
  describe('正常系', () => {
    beforeEach(() => {
      vi.mocked(PhotoQueryPostgres.prototype.list).mockClear();
      // 環境変数を設定
      process.env.GCS_SA_KEY_OBJECT = Buffer.from(
        JSON.stringify({
          project_id: 'test-project',
          private_key: 'test-key',
          client_email: 'test@example.com',
        })
      ).toString('base64');
      process.env.GCS_BUCKET_NAME = 'test-bucket';
    });

    it('オプションの指定なし', async () => {
      // Arrange

      // モックの実装
      vi.mocked(PhotoQueryPostgres.prototype.list).mockResolvedValue([
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
      expect(response.status).toBe(200);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
      expect(result[0].url).toBe('https://example.com/signed-url');
      expect(result[0].thumbnail_url).toBe('https://example.com/signed-url');
      // expect(result[0].url).toBe('https://storage.googleapis.com/mite-min-sai/test.jpg');
    });
  });
});
