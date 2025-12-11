import {beforeEach, describe, expect, it, vi} from 'vitest';
import {AnswerEntity, AnswerSchema} from './answer.entity';

describe('AnswerEntity', () => {
  describe('createメソッド', () => {
    describe('正常系', () => {
      it('idあり', () => {
        // Arrange
        const answer = AnswerSchema.parse({
          id: '1',
          isStartPlayer: true,
          isDraw: true,
          symbolCount: 110,
          fanCount: 1,
          isCorrect: true,
        });

        // Action
        const result = AnswerEntity.create(answer);

        // Assert
        expect(result).toBeInstanceOf(AnswerEntity);
      });
      it('idなし', () => {
        // Arrange
        const answer = AnswerSchema.parse({
          id: undefined,
          isStartPlayer: true,
          isDraw: true,
          symbolCount: 110,
          fanCount: 1,
          isCorrect: true,
        });

        // Action
        const result = AnswerEntity.create(answer);

        // Assert
        expect(result).toBeInstanceOf(AnswerEntity);
      });
    });
    describe.skip('異常系', () => {});
  });

  describe('reconstructメソッド', () => {
    describe('正常系', () => {
      it('idあり', () => {
        // Arrange
        const answer = AnswerSchema.parse({
          id: '1',
          isStartPlayer: true,
          isDraw: true,
          symbolCount: 110,
          fanCount: 1,
          isCorrect: true,
        });

        // Action
        const result = AnswerEntity.create(answer);

        // Assert
        expect(result).toBeInstanceOf(AnswerEntity);
      });
    });
    describe('異常系', () => {
      it('idなし', () => {
        // Arrange
        const answer = AnswerSchema.parse({
          id: undefined,
          isStartPlayer: true,
          isDraw: true,
          symbolCount: 110,
          fanCount: 1,
          isCorrect: true,
        });

        // Action & Assert
        expect(() => AnswerEntity.reconstruct(answer)).toThrow('id is required');
      });
    });
  });
});
