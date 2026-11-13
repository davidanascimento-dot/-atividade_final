const { validarCadastro, calculoFrete } = require('./index');

describe('atividade_3/index.js', () => {
  describe('validarCadastro', () => {
    test('retorna SESSAO_ATIVA para token e tempo válidos', () => {
      expect(validarCadastro('token123', 300)).toBe('SESSAO_ATIVA');
    });

    test('retorna SESSAO_EXPIRADA para token ausente ou tempo inválido', () => {
      expect(validarCadastro(null, 300)).toBe('SESSAO_EXPIRADA');
      expect(validarCadastro('token123', 0)).toBe('SESSAO_EXPIRADA');
      expect(validarCadastro('', 10)).toBe('SESSAO_EXPIRADA');
    });
  });

  describe('calculoFrete', () => {
    test('retorna -1 para entradas inválidas (peso <= 0)', () => {
      expect(calculoFrete(0, 'BA')).toBe(-1);
    });

    test('com estado string truthy a condição atual resulta em -1', () => {
      // Implementação atual usa `!estado <= 0`, que avalia para true quando estado é truthy.
      expect(calculoFrete(10, 'BA')).toBe(-1);
      expect(calculoFrete(10, 'SP')).toBe(-1);
    });
  });
});
