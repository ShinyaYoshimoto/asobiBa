import app from '../../app';

describe('scores/answer', () => {
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

    const result = await response.json();

    // Assert
    expect(result.isCorrect).toBeTruthy();
  });
});