let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10.');
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa'
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', `O numero e maior`);
        }
        else{
            exibirTextoNaTela('p', `O numero e menor`);
        }
        limparCampo()
    }
    tentativas ++
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let qtdElementoLista = listaDeNumerosSorteados.length;

    if (qtdElementoLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }


    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }

}

function reiniciar(){
    gerarNumeroAleatorio();
    console.log(gerarNumeroAleatorio);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}