const verificar = require('./idade.js');

describe('verificarIdade', () => {
    test('deve retornar a mensagem para idade maior ou igual a 18', () => {
        expect(verificar.verificarIdade(20)).toBe("Você é maior de idade.");
    });
    test('deve retornar uma string vazia para idade menor que 18', () => {
        expect(verificar.verificarIdade(15)).toBe('');
    });
});