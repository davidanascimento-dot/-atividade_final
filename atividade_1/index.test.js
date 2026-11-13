const cadastro = require('./index');

describe('cadastro (atividade_2)', () => {
  test('retorna CADASTRO_OK para dados válidos', () => {
    expect(cadastro('ana', 20, 'ana@mail.com')).toBe('CADASTRO_OK');
    expect(cadastro('ana', 18, 'ana@mail.com')).toBe('CADASTRO_OK');
  });

  test('retorna DADOS_INVALIDOS para nome curto', () => {
    expect(cadastro('jo', 20, 'jo@mail.com')).toBe('DADOS_INVALIDOS');
  });

  test('retorna DADOS_INVALIDOS para menor de idade', () => {
    expect(cadastro('ana', 17, 'ana@mail.com')).toBe('DADOS_INVALIDOS');
  });

  test('retorna DADOS_INVALIDOS para email sem @', () => {
    expect(cadastro('ana', 20, 'anamail.com')).toBe('DADOS_INVALIDOS');
  });
});
