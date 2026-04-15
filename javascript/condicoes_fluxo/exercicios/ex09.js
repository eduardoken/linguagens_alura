
const saldoDiponivel = 1200

const compraAprovada = saldoDiponivel >= 300


switch (compraAprovada) {
    case true:
        console.log('Compra aprovada');
        
        break;
        
    default:
        console.log('Saldo insuficiente');
        break;
}