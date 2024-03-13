function sortear(){
    let quantidadeNumbers = parseInt(document.getElementById('quantidade').value);
    let deNumbers = parseInt(document.getElementById('de').value);
    let ate  = parseInt(document.getElementById('ate').value);

    // #2 agora que criamos uma função que irá receber parâmetros
    // iremos colocar eles nos respectivos bloco
    // let num = numeroAleatorio(deNumbers, ate)
    // alert(num)

    let sorteados = [];
    let numero;
    for(i=0 ; i < quantidadeNumbers; i++){
        let numero = numeroAleatorio(deNumbers, ate)
        sorteados.push(numero)

        while(sorteados.includes(numero)){
            numero = numeroAleatorio(deNumbers, ate)

        }
    }
    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados:${sorteados}</label>`
    alterarStatusBotao();
}
// #1  queremos gerar um numero aletorio de campos, certo?
// fazemos uma função com parametros que logo irão ser camptados dentro dos respectivos input
function numeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;


    
}

function alterarStatusBotao() {
    let btn__reiniciar = document.getElementById('btn-reiniciar')
    if (btn__reiniciar.classList.contains('container__botao-desabilitado')) {
        btn__reiniciar.classList.remove('container__botao-desabilitado');
        btn__reiniciar.classList.add('container__botao')
    } else {
        btn__reiniciar.classList.remove('container__botao');
        btn__reiniciar.classList.add('container__botao-desabilitado')

    }
}
function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '  <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}

