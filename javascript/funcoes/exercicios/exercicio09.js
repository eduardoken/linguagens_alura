function executarAcao(acao) {
    return acao()
}

function acao() {
    return 'Executando ação!'
}

const executar = executarAcao(acao)
console.log(executar);
