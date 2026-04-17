const numeroSecreto = 6
let numeroTentado
for (let tentativa = 1; tentativa <= 3; tentativa++) {
    
    if (tentativa == 1) {
        numeroTentado = 5
        
    } else if (tentativa == 2) {
        numeroTentado = 7
        
    } else {
        numeroTentado = 6
    }

    if (numeroTentado == numeroSecreto) {
        console.log('Acertou!');
        
    } else {
        console.log('Tente novamente');
        
    }
}