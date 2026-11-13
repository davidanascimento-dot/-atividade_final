const { validarSenha } = require('./exercicio2');

describe('exercicio2 - validarSenha', () => {
  test('retorna OK para senha com 6+ caracteres', () => {
    expect(validarSenha('senhasegura123')).toBe('OK');
    expect(validarSenha('abc123')).toBe('OK');
  });

  test('retorna CURTA para senha com menos de 6 caracteres', () => {
    expect(validarSenha('123')).toBe('CURTA');
    expect(validarSenha('abc')).toBe('CURTA');
  });

  test('testa resultados corretos e incorretos e executa exemplos sob demanda', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { testarSenha, executarSePrincipal } = require('./exercicio2');

    testarSenha('senhasegura123', 'OK');
    testarSenha('123', 'OK');
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Teste aprovado:', 'senhasegura123', '=>', 'OK');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Teste falhou:', '123', '=>', 'CURTA', '(esperado:', 'OK)');

    logSpy.mockClear();
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();
    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledTimes(3);
    logSpy.mockRestore();
  });
});
