const contarProdutos = require('./index2');

describe('contarProdutos (atividade_2)', () => {
  test('conta produtos da categoria eletronicos', () => {
    expect(contarProdutos('eletronicos')).toBe(3);
  });

  test('conta produtos da categoria moveis', () => {
    expect(contarProdutos('moveis')).toBe(1);
  });

  test('retorna 0 para categoria inexistente', () => {
    expect(contarProdutos('roupas')).toBe(0);
  });
});
