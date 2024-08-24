import app from '../../app';

describe(`正常系`, () => {
  it('30符1飜', async () => {
    // Arrange
    const symbolCount = 30;
    const fanCount = 1;

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
});

describe(`異常系`, () => {
  it.each`
    symbolCount | fanCount | description
    ${10}       | ${0}     | ${'符が最小値未満, 飜が最小値未満'}
    ${20}       | ${0}     | ${'飜が最小値未満'}
    ${10}       | ${1}     | ${'符が最小値未満'}
  `('$description', async ({symbolCount, fanCount}) => {
    // Arrange
    const body = {symbolCount, fanCount};
    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    const result = await response.json();

    // Assert
    expect(result.message).toBe('Symbol count must be 20 or more and fan count must be 1 or more');
  });
});
