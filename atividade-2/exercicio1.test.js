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

  test('testa resultados corretos e incorretos e executa exemplos sob demanda', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { testarFrete, executarSePrincipal } = require('./exercicio1');

    testarFrete(200, true);
    testarFrete(80, true);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Teste aprovado:', 200, '=>', true);
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Teste falhou:', 80, '=>', false, '(esperado:', 'true)');

    logSpy.mockClear();
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();
    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(3);
    logSpy.mockRestore();
  });
});
