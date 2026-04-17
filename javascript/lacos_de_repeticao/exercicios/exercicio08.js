let pares = ''

for (let numeros = 1; numeros <=50; numeros++) {
    if (numeros % 2 == 0) {
        pares += numeros + ' '
    }
}
console.log(pares);
