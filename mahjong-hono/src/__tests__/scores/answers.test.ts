import app from '../../app';
import {AnswerEntity, AnswerSchema} from '../../modules/answer/domain/answer.entity';
import {AnswerQuerySqlite} from '../../modules/answer/infrastructure/answer.query.sqlite';

jest.mock('../../modules/answer/infrastructure/answer.query.sqlite');

describe('scores/answers', () => {
  describe('正常系', () => {
    beforeEach(() => {
      (AnswerQuerySqlite.prototype.loadAll as jest.Mock).mockClear();
    });
    it('answersを取得できること', async () => {
      // Arrange
      (AnswerQuerySqlite.prototype.loadAll as jest.Mock).mockResolvedValue([
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
      const response = await app.request('/scores/answers', {
        method: 'GET',
      });

      const result = await response.json();

      // Assert
      expect(result.answers).toHaveLength(1);
    });
  });
});
