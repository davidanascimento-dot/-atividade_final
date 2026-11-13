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
});
