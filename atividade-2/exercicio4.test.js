const { verificarServidor } = require('./exercicio4');

describe('exercicio4 - verificarServidor', () => {
  test('retorna PERIGO para temp > 80', () => {
    expect(verificarServidor(90)).toBe('PERIGO');
    expect(verificarServidor(81)).toBe('PERIGO');
  });

  test('retorna ATENCAO para temp entre 50 e 80', () => {
    expect(verificarServidor(65)).toBe('ATENCAO');
    expect(verificarServidor(50)).toBe('ATENCAO');
    expect(verificarServidor(80)).toBe('ATENCAO');
  });

  test('retorna NORMAL para temp < 50', () => {
    expect(verificarServidor(35)).toBe('NORMAL');
  });

  test('testa resultados corretos e incorretos e executa exemplos sob demanda', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { testarServidor, executarSePrincipal } = require('./exercicio4');

    testarServidor(35, 'NORMAL');
    testarServidor(90, 'NORMAL');
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Teste aprovado:', 35, '°C =>', 'NORMAL');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Teste falhou:', 90, '°C =>', 'PERIGO', '(esperado:', 'NORMAL)');

    logSpy.mockClear();
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();
    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(3);
    logSpy.mockRestore();
  });
});
