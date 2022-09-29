/* eslint-disable max-lines-per-function */
const service = require('./script');

describe('testando a requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test('testando requisição caso a promisse resolva', async () => {
    service.fetchDog.mockResolvedValue('request sucess');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe('request sucess');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promisse seja rejeitada', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});