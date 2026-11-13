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

if (typeof window !== "undefined" || require.main === module) {
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
  } else {
    console.log("barrado beta");
  }
}

if (require.main === module) {
  if (idade === "pode entrar") {
    console.log("o teste falhou");
  } else {
    console.log("não pode entrar por limite de idade");
  }

  let resultado3 = idade(18);
}

if (typeof module !== "undefined") {
  module.exports = { idade };
}