function verificarFreteGratis(valor) {
    return valor >= 150;
}

function testarFrete(valor, esperado) {
    const resultado = verificarFreteGratis(valor);

    if (resultado === esperado) {
        console.log("Teste aprovado:", valor, "=>", resultado);
    } else {
        console.log("Teste falhou:", valor, "=>", resultado, "(esperado:", esperado + ")");
    }
}

function executarExemplos() {
  testarFrete(200, true);
  testarFrete(80, false);
  testarFrete(150, true);
}

function executarSePrincipal(ehPrincipal) {
  if (ehPrincipal) {
    executarExemplos();
  }
}

executarSePrincipal(require.main === module);

/* istanbul ignore else */
if (typeof module !== "undefined") {
  module.exports = { verificarFreteGratis, testarFrete, executarSePrincipal };
}
