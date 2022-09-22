const elementoChute = document.getElementById('chute')


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'

var contaChute = 0

recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    let chute = e.results[0][0].transcript
    console.log(chute)
    exibeChuteNaTela(chute)
    contaChute += somaChute() 
    verificaSeOChutePossuiUmValorValido(chute)
    mostraChutes(contaChute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class = "box"> ${chute}</span>

    `
}

function somaChute(){
    return + 1 
}

function mostraChutes(contaChute){
    if(contaChute > 1){
        elementoChute.innerHTML += `
        <div class="conta-result"> Você já tentou ${contaChute} vezes</div>
        `
    }else{
        elementoChute.innerHTML += `
        <div class="conta-result"> Você já tentou ${contaChute} vez</div>
        `
    }
}

recognition.addEventListener('end', () =>  recognition.start())


