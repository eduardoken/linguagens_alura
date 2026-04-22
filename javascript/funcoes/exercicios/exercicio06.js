function calcular(numero1, numero2, multiplicar) {
    return multiplicar(numero1, numero2)
}
function multiplicar(n1,n2) {
    return n1 * n2
}

const resultado = calcular(8, 6, multiplicar)
console.log(`O resultado é ${resultado}`)
