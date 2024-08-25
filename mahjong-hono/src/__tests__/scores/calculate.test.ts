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

  it('30符2飜', async () => {
    // Arrange
    const symbolCount = 30;
    const fanCount = 2;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({symbolCount, fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(1000);
    expect(result.startPlayer.other).toBe(2900);

    expect(result.other.draw.startPlayer).toBe(1000);
    expect(result.other.draw.other).toBe(500);
    expect(result.other.other).toBe(2000);
  });

  it('50符3飜', async () => {
    // Arrange
    const symbolCount = 50;
    const fanCount = 3;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({symbolCount, fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(3200);
    expect(result.startPlayer.other).toBe(9600);

    expect(result.other.draw.startPlayer).toBe(3200);
    expect(result.other.draw.other).toBe(1600);
    expect(result.other.other).toBe(6400);
  });

  it('70符3飜', async () => {
    // Arrange
    const symbolCount = 70;
    const fanCount = 3;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({symbolCount, fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(4000);
    expect(result.startPlayer.other).toBe(12000);

    expect(result.other.draw.startPlayer).toBe(4000);
    expect(result.other.draw.other).toBe(2000);
    expect(result.other.other).toBe(8000);
  });

  it('20符4飜', async () => {
    // Arrange
    const symbolCount = 20;
    const fanCount = 4;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({symbolCount, fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(2600);
    expect(result.startPlayer.other).toBeNull();

    expect(result.other.draw.startPlayer).toBe(2600);
    expect(result.other.draw.other).toBe(1300);
    expect(result.other.other).toBeNull();
  });

  it('40符4飜', async () => {
    // Arrange
    const symbolCount = 40;
    const fanCount = 4;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({symbolCount, fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(4000);
    expect(result.startPlayer.other).toBe(12000);

    expect(result.other.draw.startPlayer).toBe(4000);
    expect(result.other.draw.other).toBe(2000);
    expect(result.other.other).toBe(8000);
  });

  it('6飜', async () => {
    // Arrange
    const fanCount = 6;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(6000);
    expect(result.startPlayer.other).toBe(18000);

    expect(result.other.draw.startPlayer).toBe(6000);
    expect(result.other.draw.other).toBe(3000);
    expect(result.other.other).toBe(12000);
  });

  it('14飜', async () => {
    // Arrange
    const fanCount = 14;

    // Action
    const response = await app.request('/scores/calculate', {
      method: 'POST',
      body: JSON.stringify({fanCount}),
    });

    const result = await response.json();

    // Assert
    expect(result.startPlayer.draw.startPlayer).toBeNull();
    expect(result.startPlayer.draw.other).toBe(16000);
    expect(result.startPlayer.other).toBe(48000);

    expect(result.other.draw.startPlayer).toBe(16000);
    expect(result.other.draw.other).toBe(8000);
    expect(result.other.other).toBe(32000);
  });
});

describe(`異常系`, () => {
  it.each`
    symbolCount  | fanCount | description
    ${10}        | ${0}     | ${'符が最小値未満, 飜が最小値未満'}
    ${20}        | ${0}     | ${'飜が最小値未満'}
    ${10}        | ${1}     | ${'符が最小値未満'}
    ${120}       | ${1}     | ${'符が最大値より大きい'}
    ${undefined} | ${4}     | ${'4飜だが、符がundefined'}
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
