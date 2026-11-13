const autorizacao = require('./autorizacao');

describe('autorizacao', () => {
  test('nega acesso para usuário inexistente ou inativo', () => {
    expect(autorizacao(null, '/home')).toBe('ACESSO_NEGADO');
    expect(autorizacao({ ativo: false, papel: 'ADMIN' }, '/home')).toBe('ACESSO_NEGADO');
  });

  test('controla acesso ao /painel-admin', () => {
    expect(autorizacao({ ativo: true, papel: 'ADMIN' }, '/painel-admin')).toBe('ACESSO_PERMITIDO');
    expect(autorizacao({ ativo: true, papel: 'GERENTE' }, '/painel-admin')).toBe('ACESSO_NEGADO');
  });

  test('controla acesso ao /relatorios', () => {
    expect(autorizacao({ ativo: true, papel: 'ADMIN' }, '/relatorios')).toBe('ACESSO_PERMITIDO');
    expect(autorizacao({ ativo: true, papel: 'GERENTE' }, '/relatorios')).toBe('ACESSO_PERMITIDO');
    expect(autorizacao({ ativo: true, papel: 'USER' }, '/relatorios')).toBe('ACESSO_NEGADO');
  });

  test('permite acesso a outras rotas para usuário ativo', () => {
    expect(autorizacao({ ativo: true, papel: 'USER' }, '/home')).toBe('ACESSO_PERMITIDO');
  });
});
