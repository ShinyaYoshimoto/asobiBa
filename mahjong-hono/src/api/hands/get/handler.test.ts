import app from '../../../app';

describe('GET /hands', () => {
  beforeEach(() => {});

  describe('正常系', () => {
    it('happy pattern', async () => {
      // Arrange

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
