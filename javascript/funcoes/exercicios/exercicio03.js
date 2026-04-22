function calcularIMC(peso,altura) {
    return peso / (altura * altura)
}

const resultado = calcularIMC(60, 1.76)
console.log('Meu IMC é:', resultado)