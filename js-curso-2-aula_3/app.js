let listadenumeros = [];
let NumeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML= texto;
} 
  function exibirMensageminicial(){
    exibirTextoNaTela(' h1', ' jogo do numero secreto ');
    exibirTextoNaTela(' p', ' escolha um número de 1 a 10');
    
  }
 
     function verificarChute(){
    let chute = document.querySelector('input').value;
    
   if ( chute==numeroSecreto){
      exibirTextoNaTela('h1', ' Acertou!')
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   
    } else if( chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
       
    } else{
            exibirTextoNaTela( 'p', 'O numero secreto é maior ');
        } tentativas++;
            limparCampo();
 

    }


  function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt(Math.random()* NumeroLimite + 1);
     let quantidadeDeElentosNaLista = listadenumeros.length;
    
    if(quantidadeDeElentosNaLista == NumeroLimite){
        listadenumeros=[];
    }
    
    
     if ( listadenumeros.includes( numeroEscolhido)){
      return gerarNumeroAleatorio();
    }
    else {
        listadenumeros.push( numeroEscolhido)
        return numeroEscolhido

    }


    }

function limparCampo(){
    chute= document.querySelector(' input ')
    chute.value= '';
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
 limparCampo();
 tentativas=1;
 exibirMensageminicial();
 document.getElementById(' reiniciar').setAttribute(' disabled', true);
 
}
  exibirMensageminicial();
 













