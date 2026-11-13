function calcularNota(nota) {
    if (nota >= 7) {
        return "APROVADO";
    }

    if (nota >= 5) {
        return "RECUPERACAO";
    }

    return "REPROVADO";
}

function testarNota(nota, esperado) {
    const resultado = calcularNota(nota);

    if (resultado === esperado) {
        console.log("Teste aprovado:", nota, "=>", resultado);
    } else {
        console.log("Teste falhou:", nota, "=>", resultado, "(esperado:", esperado + ")");
    }
}

function executarExemplos() {
  testarNota(8.5, "APROVADO");
  testarNota(6.0, "RECUPERACAO");
  testarNota(3.0, "REPROVADO");
}

function executarSePrincipal(ehPrincipal) {
  if (ehPrincipal) {
    executarExemplos();
  }
}

executarSePrincipal(require.main === module);

/* istanbul ignore else */
if (typeof module !== "undefined") {
  module.exports = { calcularNota, testarNota, executarSePrincipal };
}
