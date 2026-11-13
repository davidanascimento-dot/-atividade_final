function formatarCPF(cpf) {
  if (typeof cpf !== "string") {
    return "CPF_INVALIDO";
  }

  const limpo = cpf.replace(/[.-]/g, "");

  if (!/^\d{11}$/.test(limpo)) {
    return "CPF_INVALIDO";
  }

  return limpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

module.exports = { formatarCPF };
