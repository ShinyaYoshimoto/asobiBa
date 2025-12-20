import {describe, expect, it} from 'vitest';
import app from '../../../../app';

describe('POST /scores/answer', () => {
  describe('正常系', () => {
    it('子の30符1翻ツモは、子から300点、親から500点のあがりである', async () => {
      // Arrange
      const question = {
        isStartPlayer: false,
        isDraw: true,
        symbolCount: 30,
        fanCount: 1,
      };
      const answer = {
        score: {
          startPlayer: 500,
          other: 300,
        },
      };

      // Action
      const response = await app.request('/scores/answer', {
        method: 'POST',
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result.isCorrect).toBeTruthy();
    });

    it('子の30符1翻ツモは、子から300点、親から300点のあがりである', async () => {
      // Arrange
      const question = {
        isStartPlayer: false,
        isDraw: true,
        symbolCount: 30,
        fanCount: 1,
      };
      const answer = {
        score: {
          startPlayer: 300,
          other: 300,
        },
      };

      // Action
      const response = await app.request('/scores/answer', {
        method: 'POST',
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result.isCorrect).toBeFalsy();
    });

    it('子の110符1翻ツモは、子から900点、親から1800点のあがりである', async () => {
      // Arrange
      const question = {
        isStartPlayer: false,
        isDraw: true,
        symbolCount: 110,
        fanCount: 1,
      };
      const answer = {
        score: {
          startPlayer: 1800,
          other: 900,
        },
      };

      // Action
      const response = await app.request('/scores/answer', {
        method: 'POST',
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      const result = await response.json();

      // Assert
      expect(response.status).toBe(200);
      expect(result.isCorrect).toBeTruthy();
    });
  });

  describe('異常系', () => {
    it('子の0符1翻ツモは、子から300点、親から500点のあがりである', async () => {
      // Arrange
      const question = {
        isStartPlayer: false,
        isDraw: true,
        symbolCount: 0,
        fanCount: 1,
      };
      const answer = {
        score: {
          startPlayer: 300,
          other: 500,
        },
      };

      // Action
      const response = await app.request('/scores/answer', {
        method: 'POST',
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      // Assert
      expect(response.status).toBe(400);
    });
  });
});
