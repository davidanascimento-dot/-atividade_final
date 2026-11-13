const { verificarFreteGratis } = require('./exercicio1');

describe('exercicio1 - verificarFreteGratis', () => {
  test('retorna true para valor >= 150', () => {
    expect(verificarFreteGratis(200)).toBe(true);
    expect(verificarFreteGratis(150)).toBe(true);
  });

  test('retorna false para valor < 150', () => {
    expect(verificarFreteGratis(80)).toBe(false);
    expect(verificarFreteGratis(149)).toBe(false);
  });
});
