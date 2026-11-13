




function validarCadastro(token,tempoSegundo) {
 if(!token || tempoSegundo <= 0) {
     return "SESSAO_EXPIRADA";
 }

 return "SESSAO_ATIVA";

}   

//SUITE DE TESTES

if(validarCadastro("token123", 300) === "SESSAO_ATIVA") {
    console.log("caso 1 passou: cadastro válido");
}else {
    console.log("caso 1 falhou ");
}

//SUITE DE TESTE 2 

if(validarCadastro(null,300) === "SESSAO_EXPIRADA"){
console.log("caso2 passou: cadastro válido");
}else{
console.log("caso2 falhou");
}

// SUITE DE TESTE 3(caso tenha valor "undefined"no suite de teste quando tem udefined e SESSAO_EXPIRDA O CONTADOR SÓ VALIDA NO 0 ACIMA DISSO NEGA" )

if(validarCadastro("token123", 0) === "SESSAO_EXPIRADA"){
console.log("caso3 passou: detectou sessão expirada limite(0s)");
}else{
console.log("caso3 falhou: cadastro falhou!");
}

 function calculoFrete(peso,estado) {
  
    if(peso <= 0 || !estado <= 0){
        console.log("erro de entrada: peso ou estado inválido");
return -1;
    }

    let valorFrete = 0

    

    if(estado === "BA" ){
console.log(" calculando entrega em BA");
valorFrete = 10 + (2 * peso);
    }else {
        console.log(`calculando frete para outro estado(${estado}) `)
        valorFrete = 25 + (5 * peso);
    }
    
if(peso > 20){
    valorFrete += 50;
    console.log("peso acima de 20kg, frete adicional de 50 reais aplicado");

}

return valorFrete;

 }

module.exports = {
    validarCadastro,
    calculoFrete
};
