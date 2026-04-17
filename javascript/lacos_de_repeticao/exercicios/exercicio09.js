let divisaoPorTres = ''

for (let numeros = 1; numeros <= 100; numeros++) {
    if (numeros % 3 == 0) {
        divisaoPorTres += numeros + ' '
    }
}
console.log(divisaoPorTres);
