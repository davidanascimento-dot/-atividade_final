const { calcularTotal, subirDeNivel } = require('./script1');

describe('script1.js', () => {
  describe('calcularTotal', () => {
    test('aplica desconto com cupom CIMATEC', () => {
      expect(calcularTotal(120, 'CIMATEC')).toBe(110);
    });

    test('não aplica desconto sem cupom válido', () => {
      expect(calcularTotal(100, undefined)).toBe(100);
      expect(calcularTotal(100, 'OUTRO')).toBe(100);
    });
  });

  describe('subirDeNivel', () => {
    test('retorna NÍVEL 2 para pontos >= 100', () => {
      expect(subirDeNivel(100)).toBe('NÍVEL 2');
      expect(subirDeNivel(150)).toBe('NÍVEL 2');
    });

    test('retorna NÍVEL 1 para pontos < 100', () => {
      expect(subirDeNivel(50)).toBe('NÍVEL 1');
    });
  });

  test('testa resultados corretos e incorretos e executa exemplos sob demanda', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { testarCalcularTotal, testarSubirDeNivel, executarSePrincipal } = require('./script1');

    testarCalcularTotal(120, 'CIMATEC', 110);
    testarCalcularTotal(120, 'OUTRO', 110);
    testarSubirDeNivel(100, 'NÍVEL 2');
    testarSubirDeNivel(50, 'NÍVEL 2');
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Teste aprovado: total =', 110);
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Teste falhou: esperado', 110, 'mas recebeu', 120);
    expect(logSpy).toHaveBeenNthCalledWith(3, 'Teste aprovado:', 100, 'pontos =', 'NÍVEL 2');
    expect(logSpy).toHaveBeenNthCalledWith(4, 'Teste falhou:', 50, 'pontos; esperado', 'NÍVEL 2', 'mas recebeu', 'NÍVEL 1');

    logSpy.mockClear();
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();
    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(5);
    logSpy.mockRestore();
  });
});
