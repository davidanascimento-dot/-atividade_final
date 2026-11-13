const { calcularNota } = require('./exercicio3');

describe('exercicio3 - calcularNota', () => {
  test('retorna APROVADO para nota >= 7', () => {
    expect(calcularNota(8.5)).toBe('APROVADO');
    expect(calcularNota(7)).toBe('APROVADO');
  });

  test('retorna RECUPERACAO para nota >= 5 e < 7', () => {
    expect(calcularNota(6.0)).toBe('RECUPERACAO');
    expect(calcularNota(5)).toBe('RECUPERACAO');
  });

  test('retorna REPROVADO para nota < 5', () => {
    expect(calcularNota(3.0)).toBe('REPROVADO');
  });
});
