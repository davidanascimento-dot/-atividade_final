




function validarCadastro(token,tempoSegundo) {
 if(!token || tempoSegundo <= 0) {
     return "SESSAO_EXPIRADA";
 }

 return "SESSAO_ATIVA";

}   

function calculoFrete(peso, estado) {
    if (peso <= 0 || !estado) {
        return -1;
    }

    let valorFrete = estado === "BA" ? 10 + (2 * peso) : 25 + (5 * peso);

    if (peso > 20) {
        valorFrete += 50;
    }

    return valorFrete;
}

function executarExemplos() {
    console.log(validarCadastro("token123", 300));
    console.log(validarCadastro(null, 300));
    console.log(validarCadastro("token123", 0));
    console.log(calculoFrete(10, "BA"));
    console.log(calculoFrete(10, "SP"));
    console.log(calculoFrete(21, "BA"));
}

function executarSePrincipal(ehPrincipal) {
    if (ehPrincipal) {
        executarExemplos();
    }
}

executarSePrincipal(require.main === module);

module.exports = {
    validarCadastro,
    calculoFrete,
    executarSePrincipal
};
