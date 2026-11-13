function verificarServidor(temp) {
    if (temp > 80) {
        return "PERIGO";
    }

    if (temp >= 50) {
        return "ATENCAO";
    }

    return "NORMAL";
}

function testarServidor(temp, esperado) {
    const resultado = verificarServidor(temp);

    if (resultado === esperado) {
        console.log("Teste aprovado:", temp, "°C =>", resultado);
    } else {
        console.log("Teste falhou:", temp, "°C =>", resultado, "(esperado:", esperado + ")");
    }
}

function executarExemplos() {
  testarServidor(35, "NORMAL");
  testarServidor(65, "ATENCAO");
  testarServidor(90, "PERIGO");
}

function executarSePrincipal(ehPrincipal) {
  if (ehPrincipal) {
    executarExemplos();
  }
}

executarSePrincipal(require.main === module);

/* istanbul ignore else */
if (typeof module !== "undefined") {
  module.exports = { verificarServidor, testarServidor, executarSePrincipal };
}
