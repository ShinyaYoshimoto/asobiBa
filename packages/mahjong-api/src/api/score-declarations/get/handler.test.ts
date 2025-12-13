import {beforeEach, describe, expect, it} from 'vitest';
import {db} from '@asobiba/common';
import app from '../../../app';

describe('GET /score-declarations', () => {
  describe('正常系', () => {
    beforeEach(async () => {
      // テスト用のanswerを作成
      await db.answer.create({
        data: {
          isStartPlayer: false,
          isDraw: true,
          symbolCount: 30,
          fanCount: 1,
          isCorrect: false,
        },
      });
    });

    it('answersを取得できること', async () => {
      // Act
      const response = await app.request('/score-declarations', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result.answers).toHaveLength(1);
      expect(result.answers[0].id).toBeDefined();
      expect(result.answers[0].isCorrect).toBe(false);
    });
  });
});
