function calcularDesconto(valor) {
    if (valor >= 100) {
        return valor - 20;
    } else {
        return valor;
    }
}

function executarExemplo(valor = 100) {
    if (calcularDesconto(valor) === valor - 20) {
        console.log("teste passou: desconto aplicad0");
    } else {
        console.log("bug! o teste pegou um erro ");
    }
}

function executarSePrincipal(ehPrincipal, valor) {
    if (ehPrincipal) {
        executarExemplo(valor);
    }
}

executarSePrincipal(require.main === module);

/* istanbul ignore else */
if (typeof module !== "undefined") {
    module.exports = calcularDesconto;
    module.exports.executarSePrincipal = executarSePrincipal;
}