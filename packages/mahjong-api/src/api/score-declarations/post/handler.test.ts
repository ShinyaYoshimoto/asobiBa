import app from '../../../app';
import {AnswerEntity, AnswerSchema} from '../../../modules/answer/domain/answer.entity';
import {AnswerCommandRdb} from '../../../modules/answer/infrastructure/answer.command.rdb';

jest.mock('../../../modules/answer/infrastructure/answer.command.rdb');

describe('POST /score-declarations', () => {
  describe('正常系', () => {
    beforeEach(() => {
      (AnswerCommandRdb.prototype.register as jest.Mock).mockClear();
    });
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

      // モックの実装
      (AnswerCommandRdb.prototype.register as jest.Mock).mockResolvedValue(
        AnswerEntity.create(
          AnswerSchema.parse({
            isStartPlayer: false,
            isDraw: true,
            symbolCount: 30,
            fanCount: 1,
            isCorrect: true,
          })
        )
      );

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

      // モックの実装
      (AnswerCommandRdb.prototype.register as jest.Mock).mockResolvedValue(
        AnswerEntity.create(
          AnswerSchema.parse({
            isStartPlayer: false,
            isDraw: true,
            symbolCount: 30,
            fanCount: 1,
            isCorrect: false,
          })
        )
      );

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

      // モックの実装
      (AnswerCommandRdb.prototype.register as jest.Mock).mockResolvedValue(
        AnswerEntity.create(
          AnswerSchema.parse({
            isStartPlayer: false,
            isDraw: true,
            symbolCount: 110,
            fanCount: 1,
            isCorrect: false,
          })
        )
      );

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

      // モックの実装
      (AnswerCommandRdb.prototype.register as jest.Mock).mockResolvedValue(
        AnswerEntity.create(
          AnswerSchema.parse({
            isStartPlayer: false,
            isDraw: true,
            // NOTE: 本来0符であるため正しくないが、テストを通すために20符にしている
            symbolCount: 20,
            fanCount: 1,
            isCorrect: false,
          })
        )
      );

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
