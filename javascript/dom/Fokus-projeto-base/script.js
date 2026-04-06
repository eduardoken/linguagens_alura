const html = document.querySelector('html')
const botaoIniciar = document.querySelector('.app__card-primary-button')
const displayTempo = document.querySelector('#timer')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

focoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'foco')
    // banner.setAttribute('src', './imagens/foco.png')
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    //     html.setAttribute('data-contexto', 'descanso-curto')
    //     banner.setAttribute('src','./imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src','./imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade, 
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície. 
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break
        default:
            
            break
    }
}

const duracaoFoco = 1500
const descansoLongo = 900
const descansoCurto = 300