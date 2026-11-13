const compra = require('./index1');

describe('compra (atividade_2)', () => {
  test('aplica cupom quando total <= 110', () => {
    expect(compra(90)).toBe('COMPRA_COM_CUPOM');
    expect(compra(110)).toBe('COMPRA_COM_CUPOM');
  });

  test('retorna valor normal quando total > 110', () => {
    expect(compra(140)).toBe('COMPRA_VALOR_NORMAL');
    expect(compra(111)).toBe('COMPRA_VALOR_NORMAL');
  });
});
