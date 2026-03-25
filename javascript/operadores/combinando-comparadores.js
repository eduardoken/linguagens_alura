const idade = 18
const maiorIdade = idade >= 18
const possuiCNH = true

const podeDirigir = maiorIdade && possuiCNH //AND

console.log('Pode dirigir?', podeDirigir)

const podeViajarSozinha = maiorIdade || possuiCNH //OR

console.log('Pode viajar sozinha?', podeViajarSozinha)

const precisaDeAcompanhante = !maiorIdade  //NOT

console.log('Precisa de acompanhante?', precisaDeAcompanhante)