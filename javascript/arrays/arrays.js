const frutas = ['Uva','Banana','Kiwi','Maça','Morango']

console.log(frutas)

// console.log(frutas.length)
// frutas.push('Melancia')
// console.log(frutas)
// console.log(frutas.length)
// console.log(frutas[0])
// console.log(frutas[4])
// console.log(frutas[frutas.length-1])

// frutas.splice(2,1)
// console.log('Depois de remover:',frutas)

for(let i = 0; i < frutas.length; i++) {
    console.log('indice:', i)
    console.log(frutas[i])
}

console.log('ForEach')


frutas.forEach((valor, indice) => {
    console.log('índice:', indice, valor)
    
});

console.log('Usando forOff:')

for (const fruta of frutas) {
 console.log('fruta da vez:', fruta);
    
    
}