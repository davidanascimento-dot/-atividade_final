const autenticacao = require('./autenticacao');

describe('autenticacao', () => {
  test('retorna TOKEN_AUSENTE quando token é nulo, indefinido ou vazio', () => {
    expect(autenticacao(null, 100)).toBe('TOKEN_AUSENTE');
    expect(autenticacao(undefined, 100)).toBe('TOKEN_AUSENTE');
    expect(autenticacao('', 100)).toBe('TOKEN_AUSENTE');
  });

  test('retorna SESSAO_EXPIRADA quando tempo <= 0', () => {
    expect(autenticacao('token', 0)).toBe('SESSAO_EXPIRADA');
    expect(autenticacao('token', -5)).toBe('SESSAO_EXPIRADA');
  });

  test('retorna SESSAO_ATIVA para token válido e tempo positivo', () => {
    expect(autenticacao('token123', 300)).toBe('SESSAO_ATIVA');
  });
});
