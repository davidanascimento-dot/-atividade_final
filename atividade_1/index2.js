let eletronicos = [
    { nome: "TV", categoria: "eletronicos", quantidade: 10 },
    { nome: "Notebook", categoria: "eletronicos", quantidade: 5 },
    { nome: "Celular", categoria: "eletronicos", quantidade: 15 },
    { nome: "Cadeira", categoria: "moveis", quantidade: 8 }
];


function contarProdutos(categoriaBuscada) {
    let contador = 0;

    for (let produto of eletronicos) {
        if (produto.categoria === categoriaBuscada) {
            contador++;
        }
    }

    return contador;
}

console.log(contarProdutos("eletronicos"));

/* istanbul ignore else */
if (typeof module !== "undefined") {
    module.exports = contarProdutos;
}
