const { calcularTotal, subirDeNivel } = require('./script1');

describe('script1.js', () => {
  describe('calcularTotal', () => {
    test('aplica desconto com cupom CIMATEC', () => {
      expect(calcularTotal(120, 'CIMATEC')).toBe(110);
    });

    test('não aplica desconto sem cupom válido', () => {
      expect(calcularTotal(100, undefined)).toBe(100);
      expect(calcularTotal(100, 'OUTRO')).toBe(100);
    });
  });

  describe('subirDeNivel', () => {
    test('retorna NÍVEL 2 para pontos >= 100', () => {
      expect(subirDeNivel(100)).toBe('NÍVEL 2');
      expect(subirDeNivel(150)).toBe('NÍVEL 2');
    });

    test('retorna NÍVEL 1 para pontos < 100', () => {
      expect(subirDeNivel(50)).toBe('NÍVEL 1');
    });
  });
});
