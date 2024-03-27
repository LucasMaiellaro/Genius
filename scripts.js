verde = document.getElementById('verde');
vermelho = document.getElementById('vermelho');
amarelo = document.getElementById('amarelo');
azul = document.getElementById('azul');
i = 0;
sequencia = [];
sequenciaJogador = [];
contador = 0;
auxiliarContador = -1000;

document.querySelector('.instrucao').style.display = 'none';
document.querySelector('.perdeu').style.display = 'none';
document.querySelector('.pontuacao').style.display = 'none';
document.querySelector('.numero-pont').style.display = 'none';
document.querySelector('.contador').style.display = 'none';
document.querySelector('.numero-cont').style.display = 'none';
document.querySelector('.numero-cont').innerHTML = contador;

function fazSequencia(){
    document.querySelector('.botao').style.display = 'none';
    document.querySelector('.contador').style.display = 'initial';
    document.querySelector('.numero-cont').style.display = 'initial';
    document.querySelector('.instrucao').style.display = 'initial';
    document.querySelector('.instrucao').innerHTML = 'aguarde';
    document.querySelector('.instrucao').style.color = 'red';
    verde.disabled = true;
    vermelho.disabled = true;
    amarelo.disabled = true;
    azul.disabled = true;
    var botao = Math.floor(Math.random() * 4);
    sequencia[i] = botao;
    setTimeout(function (){
        reproduzSequencia(sequencia);
    }, 1000);
    i++;
    sequenciaJogador = [];
    iJogador = 0;
    contador++;
    document.querySelector('.numero-cont').innerHTML = contador;
    auxiliarContador = auxiliarContador + 1500;
    setTimeout(function(){
        document.querySelector('.instrucao').innerHTML = 'reproduza';
        document.querySelector('.instrucao').style.color = 'green';
        verde.disabled = false;
        vermelho.disabled = false;
        amarelo.disabled = false;
        azul.disabled = false;
    }, 2000 + auxiliarContador);
    console.log(sequencia);
}

function reproduzSequencia(sequencia){
    var botaoAceso;
    for (cont = 0; cont <= sequencia.length; cont++){
        botaoAceso = sequencia[cont];
        sequencia.forEach(function (botaoAceso, i){
            setTimeout(function(){
                switch (botaoAceso){
                    case 0:
                        verde.style.backgroundColor = 'rgb(81, 255, 0)';
                        setTimeout(function apagaBotao(){verde.style.backgroundColor = 'green'}, 1000);
                        break;
                    case 1:
                        vermelho.style.backgroundColor = 'rgb(255, 0, 179)';
                        setTimeout(function apagaBotao(){vermelho.style.backgroundColor = 'red'}, 1000);
                        break;
                    case 2:
                        amarelo.style.backgroundColor = 'rgb(255, 145, 0)';
                        setTimeout(function apagaBotao(){amarelo.style.backgroundColor = 'yellow'}, 1000);
                        break;
                    case 3:
                        azul.style.backgroundColor = 'rgb(0, 255, 255)';
                        setTimeout(function apagaBotao(){azul.style.backgroundColor = 'blue'}, 1000);
                        break;
                }
            }, 1500 * i);
        });
    }
}

// BOTÕES

function apertaVerde(){
    verde.style.backgroundColor = 'rgb(81, 255, 0)';
    setTimeout(function apagaBotao(){verde.style.backgroundColor = 'green'}, 0400);
    sequenciaJogador[iJogador] = 0;
    if (sequenciaJogador[iJogador] != sequencia[iJogador]){
        perdeu();
    }
    else{
        if (sequenciaJogador.length >= sequencia.length){
            fazSequencia();
        }
        else{
            iJogador++;
        }
    }
}

function apertaVermelho(){
    vermelho.style.backgroundColor = 'rgb(255, 0, 179)';
    setTimeout(function apagaBotao(){vermelho.style.backgroundColor = 'red'}, 0400);
    sequenciaJogador[iJogador] = 1;
    if (sequenciaJogador[iJogador] != sequencia[iJogador]){
        perdeu();
    }
    else{
        if (sequenciaJogador.length >= sequencia.length){
            fazSequencia();
        }
        else{
            iJogador++;
        }
    }
}

function apertaAmarelo(){
    amarelo.style.backgroundColor = 'rgb(255, 145, 0)';
    setTimeout(function apagaBotao(){amarelo.style.backgroundColor = 'yellow'}, 0400);
    sequenciaJogador[iJogador] = 2;
    if (sequenciaJogador[iJogador] != sequencia[iJogador]){
        perdeu();
    }
    else{
        if (sequenciaJogador.length >= sequencia.length){
            fazSequencia();
        }
        else{
            iJogador++;
        }
    }
}

function apertaAzul(){
    azul.style.backgroundColor = 'rgb(0, 255, 255)';
    setTimeout(function apagaBotao(){azul.style.backgroundColor = 'blue'}, 0400);
    sequenciaJogador[iJogador] = 3;
    if (sequenciaJogador[iJogador] != sequencia[iJogador]){
        perdeu();
    }
    else{
        if (sequenciaJogador.length >= sequencia.length){
            fazSequencia();
        }
        else{
            iJogador++;
        }   
    }
}

function perdeu(){
    document.querySelector('.instrucao').style.display = 'none';
    document.querySelector('.verde').style.display = 'none';
    document.querySelector('.vermelho').style.display = 'none';
    document.querySelector('.amarelo').style.display = 'none';
    document.querySelector('.azul').style.display = 'none';
    document.querySelector('.contador').style.display = 'none';
    document.querySelector('.numero-cont').style.display = 'none';
    setTimeout(function vocePerdeu(){
        document.querySelector('.perdeu').style.display = 'initial';
        document.querySelector('.pontuacao').style.display = 'initial';
        document.querySelector('.numero-pont').style.display = 'initial';
        document.querySelector('.numero-pont').innerHTML = contador - 1;
    }, 0500)
}

// ================================= EASTER EGG

console.log('Olá curioso :)');
console.log('Aqui você consegue roubar e alcançar pontuações incríveis');
console.log('Toda a sequencia será mostrada aqui embaixo');
