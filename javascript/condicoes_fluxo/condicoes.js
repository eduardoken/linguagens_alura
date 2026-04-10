const nome = ''

if (nome) {
    console.log('Olá', nome)

} else {
    console.log('Sem nome')

}

const idade = null

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade')
    }

}