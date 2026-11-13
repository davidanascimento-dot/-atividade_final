const formatador = require('./formatador');
describe('formatarCPF', () => {
    test('deve formatar  o CPF ', () => {
        expect(formatador.formatarCPF('12345678901')).toBe('123.456.789-01');
    });
});

test('deve manter  inalterado um cpf já formatado', () => {
    expect(formatador.formatarCPF('123.456.789-01')).toBe('123.456.789-01');
});

test('deve retornar CPF_INVALIDO para um cpf inválido', () => {
    expect(formatador.formatarCPF('1234567890')).toBe('CPF_INVALIDO');
    expect(formatador.formatarCPF('123456789012')).toBe('CPF_INVALIDO');
    expect(formatador.formatarCPF('1234567890a')).toBe('CPF_INVALIDO');
    expect(formatador.formatarCPF(12345678901)).toBe('CPF_INVALIDO');
    expect(formatador.formatarCPF(null)).toBe('CPF_INVALIDO');
});

