function calcularTroco(valorCompra, valorPago) {
    return valorPago - valorCompra
}

const troco = calcularTroco(21, 22)
console.log(`O troco a ser dado é ${troco}`)
