function validarSenha(senha) {
    if (senha.length >= 6) {
        return "OK";
    }

    return "CURTA";
}

function testarSenha(senha, esperado) {
    const resultado = validarSenha(senha);

    if (resultado === esperado) {
        console.log("Teste aprovado:", senha, "=>", resultado);
    } else {
        console.log("Teste falhou:", senha, "=>", resultado, "(esperado:", esperado + ")");
    }
}

if (require.main === module) {
  testarSenha("senhasegura123", "OK");
  testarSenha("123", "CURTA");
  testarSenha("abc123", "OK");
}

if (typeof module !== "undefined") {
  module.exports = { validarSenha, testarSenha };
}
