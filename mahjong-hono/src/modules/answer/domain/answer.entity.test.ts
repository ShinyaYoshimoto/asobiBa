import {AnswerEntity, AnswerSchema} from './answer.entity';

describe('AnswerEntity', () => {
   it('createメソッドは、idがない場合にエラーを返す', () => {
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

  it('reconstructメソッドは、idがない場合にエラーを返す', () => {
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
