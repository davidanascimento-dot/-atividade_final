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

  test('executa exemplos somente quando solicitado como módulo principal', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { executarSePrincipal } = require('./index');

    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();

    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(6);
    logSpy.mockRestore();
  });

  describe('calculoFrete', () => {
    test('retorna -1 para entradas inválidas (peso <= 0)', () => {
      expect(calculoFrete(0, 'BA')).toBe(-1);
    });

    test('retorna -1 quando o estado está ausente', () => {
      expect(calculoFrete(10, '')).toBe(-1);
      expect(calculoFrete(10, null)).toBe(-1);
    });

    test('calcula o frete para BA e outros estados', () => {
      expect(calculoFrete(10, 'BA')).toBe(30);
      expect(calculoFrete(10, 'SP')).toBe(75);
    });

    test('adiciona taxa extra para peso acima de 20 kg', () => {
      expect(calculoFrete(21, 'BA')).toBe(102);
      expect(calculoFrete(21, 'SP')).toBe(180);
    });
  });
});
