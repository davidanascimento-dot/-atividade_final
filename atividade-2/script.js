if (typeof document !== "undefined") {
  const botao = document.getElementById('btn');
  if (botao) {
    botao.addEventListener('click', () => {
      alert("teste de backEnd");
    });
  }
}

let nome = 'david';
let num = 2;
let numero = "2";
let nome1 = "";

function deveExecutarDemo(temJanela, ehPrincipal) {
  return temJanela || ehPrincipal;
}

if (deveExecutarDemo(typeof window !== "undefined", require.main === module)) {
  console.log(numero * 3);
  console.log(numero);
  numero = parseInt(numero, 10);
  console.log(typeof numero);
  console.log(typeof nome);

  for (let i = 0; i < 33; i++) {
    console.log(i);
  }
}

function idade(valor) {
  if (valor >= 18) {
    console.log("pode entrar: ");
    return true;
  } else {
    console.log("barrado beta");
    return false;
  }
}

function testarIdade(valor) {
  if (idade(valor)) {
    console.log("o teste passou");
  } else {
    console.log("não pode entrar por limite de idade");
  }
}

function executarExemplos() {
  testarIdade(18);
}

function executarSePrincipal(ehPrincipal) {
  if (ehPrincipal) {
    executarExemplos();
  }
}

executarSePrincipal(require.main === module);

/* istanbul ignore else */
/* istanbul ignore else */
if (typeof module !== "undefined") {
  module.exports = { idade, testarIdade, executarSePrincipal, deveExecutarDemo };
}