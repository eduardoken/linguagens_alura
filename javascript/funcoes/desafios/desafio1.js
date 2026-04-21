const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-Vindo(a) ao Quiz de JavaScript!')
console.log('Responda com a letra correta: a, b ou c\n')

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma função? \n(a) define \n(b) function \n(c) create\n', (resposta1) => {

    if (resposta1 == 'a') {
        console.log('Resposta incorreta');

    } else if (resposta1 == 'b') {
        console.log('Resposta correta');
        acertos++

    } else if (resposta1 == 'c') {
        console.log('Resposta incorreta');

    } else {

    }

    rl.question('2) Qual dessas é uma estrutura de repetição? \n(a) loopar \n(b) repeat \n(c) for\n', (resposta2) => {

        if (resposta2 == 'a') {
            console.log('Resposta incorreta');

        } else if (resposta2 == 'b') {
            console.log('Resposta incorreta');

        } else if (resposta2 == 'c') {
            console.log('Resposta correta');
            acertos++

        }

        rl.question('3) Qual valor é considerado falsy em JavaScript? \n(a) 1 \n(b) 0 \n(c) "texto"\n', (resposta3) => {
            if (resposta3 == 'a') {
                console.log('Resposta incorreta');

            } else if (resposta3 == 'b') {
                console.log('Resposta correta');
                acertos++

            } else if (resposta3 == 'c') {
                console.log('Resposta incorreta');

            }
            console.log(`Você obteve ${acertos} acertos`);

            if (acertos == 1) {
                console.log('Bom! Continue estudando');

            } else if (acertos == 2) {
                console.log('Muito bom, continue assim!');

            } else if (acertos == 3) {
                console.log('Parabéns, você gabaritou!');

            } else {
                console.log('Continue praticando e tente novamente!');

            }

            rl.close()
        })

    })


})

