const menorValor = 0
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

function gerarNumeroAleatorio() {
    return parseInt( Math.random() * maiorValor + 1 )
}

console.log ( 'Numero Secreto: ',  numeroSecreto)


elementoMenorValor.innerHTML = menorValor


elementoMaiorValor.innerHTML = maiorValor