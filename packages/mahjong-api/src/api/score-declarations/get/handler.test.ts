import {beforeEach, describe, expect, it, vi} from 'vitest';
import app from '../../../app';
import {AnswerEntity, AnswerSchema} from '../../../modules/answer/domain/answer.entity';
import {AnswerQueryRdb} from '../../../modules/answer/infrastructure/answer.query.rdb';

vi.mock('../../../modules/answer/infrastructure/answer.query.rdb');

describe('GET /score-declarations', () => {
  describe('正常系', () => {
    beforeEach(() => {
      vi.mocked(AnswerQueryRdb.prototype.loadAll).mockClear();
    });
    it('answersを取得できること', async () => {
      // Arrange
      vi.mocked(AnswerQueryRdb.prototype.loadAll).mockResolvedValue([
        AnswerEntity.create(
          AnswerSchema.parse({
            id: '1',
            isStartPlayer: false,
            isDraw: true,
            symbolCount: 30,
            fanCount: 1,
            isCorrect: false,
          })
        ),
      ]);
      // Act
      const response = await app.request('/score-declarations', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(result.answers).toHaveLength(1);
    });
  });
});
