function verificarIdade(idade) {
    if(idade >= 18) {
        return "Você é maior de idade.";
    }
    return '';

}
exports.verificarIdade = verificarIdade;