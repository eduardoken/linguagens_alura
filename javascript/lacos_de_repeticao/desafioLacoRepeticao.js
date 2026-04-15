// contar quantos numeros pares e impares nós temos entre 0 e 100

let numerosPar = ''
let numerosImpar = ''

// lacoDeRepeticao

for (let i = 0; i <= 100; i++) {
    
    if (i % 2 == 0) {
        numerosPar = numerosPar + i + ' '
        
    } else{
        numerosImpar += i + ' '
    }
}

console.log('Pares:', numerosPar )
console.log('Impar', numerosImpar);

