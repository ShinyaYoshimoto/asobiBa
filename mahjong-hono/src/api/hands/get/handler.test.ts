import app from '../../../app';

describe('GET /hands', () => {
  beforeEach(() => {
    // TODO: モッククリア
  });

  describe('正常系', () => {
    it('happy pattern', async () => {
      // Arrange
      // TODO: モックの作成
      // ただ、データ自体は初期投入データを取得するだけなので、モックは不要かも

      // Action
      const response = await app.request('/hands');
      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result.hands.length).toBeGreaterThan(0);
      expect(result.hands[0]).toStrictEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          nameKana: expect.any(String),
          fanCount: expect.any(Number),
          fanCountForCall: expect.any(Number),
        })
      );
    });
  });
});
