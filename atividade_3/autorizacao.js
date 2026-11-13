function autorizacao(usuario, rota) {
  if (!usuario || usuario.ativo === false) {
    return "ACESSO_NEGADO";
  }

  if (rota === "/painel-admin") {
    return usuario.papel === "ADMIN" ? "ACESSO_PERMITIDO" : "ACESSO_NEGADO";
  }

  if (rota === "/relatorios") {
    return usuario.papel === "ADMIN" || usuario.papel === "GERENTE"
      ? "ACESSO_PERMITIDO"
      : "ACESSO_NEGADO";
  }

  return "ACESSO_PERMITIDO";
}

module.exports = autorizacao;
