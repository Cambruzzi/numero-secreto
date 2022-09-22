function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chute === 'game over' || chute === 'desisto'){
        document.body.innerHTML = `
        <h2>Você desistiu!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

    `
    }

    if ( chuteForInvalido(numero) ){
        elementoChute.innerHTML += `<div> Valor Inválido. Fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: O numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }



    if ( numero === numeroSecreto){
        
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
        mostraResultado(contaChute)

    } else if (numero < numeroSecreto){
        elementoChute.innerHTML+= `
        <div>O número secreto é maior  <i class="fa-sharp fa-solid fa-angle-up"></i> </div> 
        `
        return
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML+= `
        <div>O número secreto é menor  <i class="fa-sharp fa-solid fa-angle-down"></i> </div> 
        `
        return
    }
}

function chuteForInvalido(numero){
    
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        
        window.location.reload()

    }
})

function mostraResultado(resultado){
    if(resultado > 1){
        document.body.innerHTML += `
        <div class="conta-result">Você precisou de ${resultado} vezes para acertar</div>

    `
    }else{
        document.body.innerHTML += `
        <div class="conta-result">Você precisou de ${resultado} vez para acertar</div>
    `
    }
}