const calcularDesconto = require('./exercicio5');

describe('calcularDesconto', () => {
  test('aplica desconto de 20 quando valor >= 100', () => {
    expect(calcularDesconto(100)).toBe(80);
    expect(calcularDesconto(150)).toBe(130);
  });

  test('não aplica desconto quando valor < 100', () => {
    expect(calcularDesconto(99)).toBe(99);
    expect(calcularDesconto(0)).toBe(0);
  });

  test('executa o exemplo somente quando este arquivo é o principal', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    calcularDesconto.executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();

    calcularDesconto.executarSePrincipal(true);
    expect(logSpy).toHaveBeenLastCalledWith('teste passou: desconto aplicad0');

    calcularDesconto.executarSePrincipal(true, 100);
    expect(logSpy).toHaveBeenLastCalledWith('teste passou: desconto aplicad0');

    calcularDesconto.executarSePrincipal(true, 50);
    expect(logSpy).toHaveBeenLastCalledWith('bug! o teste pegou um erro ');
    logSpy.mockRestore();
  });
});
