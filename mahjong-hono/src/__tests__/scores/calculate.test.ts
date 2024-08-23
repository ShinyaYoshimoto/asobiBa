import app from '../../app';

it('30符1飜 = 1000点', async () => {
  // Arrange
  const symbolCount = 30;
  const fanCount = 1;
  const expected = 1000;

  // Action
  const response = await app.request('/scores/calculate', {
    method: 'POST',
    body: JSON.stringify({symbolCount, fanCount}),
  });

  const result = await response.json();

  // Assert
  expect(result.startPlayer.draw.startPlayer).toBeNull();
  expect(result.startPlayer.draw.other).toBe(500);
  expect(result.startPlayer.other).toBe(1500);

  expect(result.other.draw.startPlayer).toBe(500);
  expect(result.other.draw.other).toBe(300);
  expect(result.other.other).toBe(1000);
});
