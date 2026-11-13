function autenticacao(token, tempoSegundos) {
  if (token === null || token === undefined || token === "") {
    return "TOKEN_AUSENTE";
  }

  if (tempoSegundos <= 0) {
    return "SESSAO_EXPIRADA";
  }

  return "SESSAO_ATIVA";
}

module.exports = autenticacao;
