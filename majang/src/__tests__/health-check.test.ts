import supertest from 'supertest';
import app from '../app';

describe('ヘルスチェック用エンドポイントのテスト', () => {
  it('should return 200', async () => {
    // Action
    const response = await supertest(app).get('/');
    // Assert
    expect(response.status).toBe(200);
  });
});
