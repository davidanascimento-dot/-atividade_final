const calcularDesconto = require('./exercicio5');

describe('calcularDesconto', () => {
  test('aplica desconto de 20 quando valor >= 100', () => {
    expect(calcularDesconto(100)).toBe(80);
    expect(calcularDesconto(150)).toBe(130);
  });

  test('não aplica desconto quando valor < 100', () => {
    expect(calcularDesconto(99)).toBe(99);
    expect(calcularDesconto(0)).toBe(0);
  });
});
