const { verificarServidor } = require('./exercicio4');

describe('exercicio4 - verificarServidor', () => {
  test('retorna PERIGO para temp > 80', () => {
    expect(verificarServidor(90)).toBe('PERIGO');
    expect(verificarServidor(81)).toBe('PERIGO');
  });

  test('retorna ATENCAO para temp entre 50 e 80', () => {
    expect(verificarServidor(65)).toBe('ATENCAO');
    expect(verificarServidor(50)).toBe('ATENCAO');
    expect(verificarServidor(80)).toBe('ATENCAO');
  });

  test('retorna NORMAL para temp < 50', () => {
    expect(verificarServidor(35)).toBe('NORMAL');
  });
});
