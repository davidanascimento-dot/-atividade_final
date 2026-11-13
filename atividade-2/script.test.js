const { idade } = require('./script');

describe('script.js - idade', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    logSpy.mockRestore();
  });

  test('imprime "pode entrar: " para idade >= 18', () => {
    idade(18);
    expect(logSpy).toHaveBeenCalledWith('pode entrar: ');
  });

  test('imprime "barrado beta" para idade < 18', () => {
    idade(17);
    expect(logSpy).toHaveBeenCalledWith('barrado beta');
  });
});
