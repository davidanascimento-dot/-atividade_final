function cadastro(nome, idade, email) {
    if (!nome || nome.length < 3) {
        console.log("colocar o nome");
        return "DADOS_INVALIDOS";
    }

    if (idade < 18) {
        console.log("colocar a idade");
        return "DADOS_INVALIDOS";
    }

    if (!email || !email.includes('@')) {
        console.log("colocar o @");
        return "DADOS_INVALIDOS";
    }

    return "CADASTRO_OK";
}

// Testes
console.log(cadastro("ana", 20, "ana@mail.com")); // CADASTRO_OK
console.log(cadastro("jo", 20, "jo@mail.com"));   // DADOS_INVALIDOS
console.log(cadastro("ana", 17, "ana@mail.com")); // DADOS_INVALIDOS
console.log(cadastro("ana", 18, "ana@mail.com")); // CADASTRO_OK (limite!)
console.log(cadastro("ana", 20, "anamail.com"));  // DADOS_INVALIDOS

if (typeof module !== "undefined") {
    module.exports = cadastro;
}