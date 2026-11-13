const { idade, testarIdade, executarSePrincipal, deveExecutarDemo } = require('./script');

describe('script.js - idade', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    logSpy.mockRestore();
  });

  test('imprime "pode entrar: " para idade >= 18', () => {
    idade(18);
    expect(logSpy).toHaveBeenCalledWith('pode entrar: ');
  });

  test('imprime "barrado beta" para idade < 18', () => {
    idade(17);
    expect(logSpy).toHaveBeenCalledWith('barrado beta');
  });

  test('retorna a permissão de entrada e cobre os dois caminhos do teste', () => {
    expect(idade(18)).toBe(true);
    expect(idade(17)).toBe(false);

    testarIdade(18);
    expect(logSpy).toHaveBeenCalledWith('o teste passou');
    testarIdade(17);
    expect(logSpy).toHaveBeenCalledWith('não pode entrar por limite de idade');
  });

  test('executa exemplos somente quando solicitado', () => {
    executarSePrincipal(false);
    expect(logSpy).not.toHaveBeenCalled();

    executarSePrincipal(true);
    expect(logSpy).toHaveBeenCalledWith('pode entrar: ');
    expect(deveExecutarDemo(false, false)).toBe(false);
    expect(deveExecutarDemo(false, true)).toBe(true);
    expect(deveExecutarDemo(true, false)).toBe(true);
  });

  test('registra o clique quando o botão existe e não falha quando não existe', () => {
    const originalDocument = global.document;
    const originalWindow = global.window;
    const originalAlert = global.alert;
    const listener = jest.fn();
    global.window = undefined;
    global.alert = jest.fn();

    try {
      global.document = { getElementById: jest.fn(() => null) };
      jest.isolateModules(() => require('./script'));
      expect(global.document.getElementById).toHaveBeenCalledWith('btn');

      global.document = {
        getElementById: jest.fn(() => ({ addEventListener: jest.fn((event, callback) => {
          expect(event).toBe('click');
          listener.mockImplementation(callback);
        }) }))
      };
      jest.isolateModules(() => require('./script'));
      listener();
      expect(global.alert).toHaveBeenCalledWith('teste de backEnd');
    } finally {
      if (originalDocument === undefined) delete global.document;
      else global.document = originalDocument;
      if (originalWindow === undefined) delete global.window;
      else global.window = originalWindow;
      if (originalAlert === undefined) delete global.alert;
      else global.alert = originalAlert;
    }
  });

  test('executa os logs de inicialização em ambiente com janela', () => {
    const originalWindow = global.window;
    global.window = {};

    try {
      jest.isolateModules(() => require('./script'));
      expect(logSpy).toHaveBeenCalledWith(6);
      expect(logSpy).toHaveBeenCalledWith(32);
    } finally {
      if (originalWindow === undefined) delete global.window;
      else global.window = originalWindow;
    }
  });
});
