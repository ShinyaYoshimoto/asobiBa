import {beforeEach, describe, expect, it, vi} from 'vitest';
import {db} from '@asobiba/common';
import app from '../../../../app';

// GCS のモックは引き続き必要（外部サービスのため）
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
  let accountId: string;
  let tagId: string;

  beforeEach(async () => {
    // テスト用のアカウント、タグ、写真を作成
    const account = await db.account.create({data: {}});
    accountId = account.id;

    const tag = await db.tag.create({
      data: {
        accountId,
        name: 'test',
      },
    });
    tagId = tag.id;

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

  describe('正常系', () => {
    it('オプションの指定なし', async () => {
      // Arrange
      const now = new Date();
      const photo = await db.photo.create({
        data: {
          accountId,
          fileName: 'test.jpg',
          description: 'test',
          createdAt: now, // 明示的に日時を設定
        },
      });

      await db.photoTag.create({
        data: {
          photoId: photo.id,
          tagId,
        },
      });

      // Action
      const response = await app.request('/photos/search', {
        method: 'POST',
        body: JSON.stringify({
          option: {
            limit: 20,
            date: now.toISOString(), // 同じ日時を検索条件に使用
            tag_id: tagId,
          },
        }),
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(photo.id);
      expect(result[0].url).toBe('https://example.com/signed-url');
      expect(result[0].thumbnail_url).toBe('https://example.com/signed-url');
    });
  });
});
