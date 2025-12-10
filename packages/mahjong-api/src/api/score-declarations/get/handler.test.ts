import app from '../../../app';
import {AnswerEntity, AnswerSchema} from '../../../modules/answer/domain/answer.entity';
import {AnswerQueryRdb} from '../../../modules/answer/infrastructure/answer.query.rdb';

jest.mock('../../../modules/answer/infrastructure/answer.query.rdb');

describe('GET /score-declarations', () => {
  describe('正常系', () => {
    beforeEach(() => {
      (AnswerQueryRdb.prototype.loadAll as jest.Mock).mockClear();
    });
    it('answersを取得できること', async () => {
      // Arrange
      (AnswerQueryRdb.prototype.loadAll as jest.Mock).mockResolvedValue([
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
