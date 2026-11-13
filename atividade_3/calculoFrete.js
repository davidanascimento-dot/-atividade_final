function calculoFrete(peso, uf) {
  if (peso <= 0) {
    return -1;
  }

  let valor;

  if (uf === "BA") {
    valor = 10 + 2 * peso;
  } else {
    valor = 25 + 5 * peso;
  }

  if (peso > 20) {
    valor += 50;
  }

  return valor;
}

module.exports = calculoFrete;
