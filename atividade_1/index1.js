

let maca = 90;
let brigadeiro = 50;
let comida = 100;

function compra(totalCompra) {
    if (totalCompra <= 110) {
        console.log("Hora de fazer a compra — cupom aplicado!");
        return "COMPRA_COM_CUPOM";
    } else {
        console.log("Passou do limite, valor normal: " + totalCompra);
        return "COMPRA_VALOR_NORMAL";
    }
}

// --- Chamadas ---
let totalMacaBrigadeiro = maca + brigadeiro; // 140
console.log("Total:", totalMacaBrigadeiro);

console.log(compra(totalMacaBrigadeiro)); // Passou do limite → COMPRA_VALOR_NORMAL
console.log(compra(maca));                // 90 → COMPRA_COM_CUPOM
console.log(compra(comida));              // 100 → COMPRA_COM_CUPOM

if (typeof module !== "undefined") {
    module.exports = compra;
}