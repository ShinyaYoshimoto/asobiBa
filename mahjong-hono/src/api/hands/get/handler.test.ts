import app from '../../../app';

describe('GET /hands', () => {
  beforeEach(() => {
    // TODO: モッククリア
  })

  describe('正常系', () => {
    it('happy path', async () => {
      // Arrange
    // TODO: モックの作成
    // ただ、データ自体は初期投入データを取得するだけなので、モックは不要かも

    // Action
    const response = await app.request('/hands');

    // Assert
      expect(response.status).toBe(200);
    });
  });
});