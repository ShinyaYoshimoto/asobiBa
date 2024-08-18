import supertest from 'supertest';
import app from '../app';

describe('符数と翻数を受け取り、点数を計算するAPI', () => {
  describe('正常系', () => {
    test.each`
      symbolCount | fanCount | expectedScore
      ${30}       | ${1}     | ${1000}
    `('$symbolCount符$fanCount飜 = $expectedScore点', async testCase => {
      // Arrange
      const {symbolCount, fanCount, expectedScore} = testCase;

      // Act
      const response = await supertest(app)
        .post('/calculate-score')
        .send({symbolCount: parseInt(symbolCount), fanCount: parseInt(fanCount)});

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.score).toBe(expectedScore);
    });
  });

  describe('異常系', () => {
    test('symbolCountが20未満の場合、400エラーが返されること', async () => {
      // Arrange
      const symbolCount = 19;
      const fanCount = 1;

      // Act
      const response = await supertest(app).post('/calculate-score').send({symbolCount, fanCount});

      // Assert
      expect(response.status).toBe(400);
    });

    test('fanCountが1未満の場合、400エラーが返されること', async () => {
      // Arrange
      const symbolCount = 20;
      const fanCount = 0;

      // Act
      const response = await supertest(app).post('/calculate-score').send({symbolCount, fanCount});

      // Assert
      expect(response.status).toBe(400);
    });
  });
});
