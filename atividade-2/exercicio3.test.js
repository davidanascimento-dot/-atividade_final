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

  test('testa resultados corretos e incorretos e executa exemplos sob demanda', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { testarNota, executarSePrincipal } = require('./exercicio3');

    testarNota(8, 'APROVADO');
    testarNota(3, 'APROVADO');
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Teste aprovado:', 8, '=>', 'APROVADO');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Teste falhou:', 3, '=>', 'REPROVADO', '(esperado:', 'APROVADO)');

    logSpy.mockClear();
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();
    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(3);
    logSpy.mockRestore();
  });
});
