const calculoFrete = require('./calculoFrete');

describe('calculoFrete (atividade_3/calculoFrete.js)', () => {
  test('retorna -1 para peso inválido', () => {
    expect(calculoFrete(0, 'BA')).toBe(-1);
    expect(calculoFrete(-1, 'SP')).toBe(-1);
  });

  test('calcula frete para BA', () => {
    expect(calculoFrete(10, 'BA')).toBe(30); // 10 + 2*10
  });

  test('calcula frete para outros estados', () => {
    expect(calculoFrete(10, 'SP')).toBe(75); // 25 + 5*10
  });

  test('adiciona taxa extra para peso > 20', () => {
    expect(calculoFrete(21, 'BA')).toBe(102); // 10 + 42 + 50
    expect(calculoFrete(21, 'SP')).toBe(180); // 25 + 105 + 50
  });
});
