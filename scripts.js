// ==================== VARIAVEIS

verde = document.getElementById('verde');
vermelho = document.getElementById('vermelho');
amarelo = document.getElementById('amarelo');
azul = document.getElementById('azul');
i = 0;
sequencia = [];
sequenciaJogador = [];
contador = 0;

// ==================== MAIN CODE

document.querySelector('.perdeu').style.display = 'none';
document.querySelector('.numero-cont').innerHTML = contador;

function fazSequencia(){
    document.querySelector('.div-main').style.display = 'none';
    document.querySelector('main:nth-child(2)').style.marginTop = '110px';
    setTimeout(function (){
        var botao = Math.floor(Math.random() * 4);
        sequencia[i] = botao;
        reproduzSequencia(sequencia);
        i++;
        sequenciaJogador = [];
        iJogador = 0;
    }, 1000);
    contador++;
    document.querySelector('.numero-cont').innerHTML = contador;
}

//FUNCTION TA FUNCIONANDO 
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
                        vermelho.style.backgroundColor = 'rgb(255, 0, 76)';
                        setTimeout(function apagaBotao(){vermelho.style.backgroundColor = 'red'}, 1000);
                        break;
                    case 2:
                        amarelo.style.backgroundColor = 'rgb(255, 255, 144)';
                        setTimeout(function apagaBotao(){amarelo.style.backgroundColor = 'yellow'}, 1000);
                        break;
                    case 3:
                        azul.style.backgroundColor = 'rgb(75, 159, 255)';
                        setTimeout(function apagaBotao(){azul.style.backgroundColor = 'blue'}, 1000);
                        break;
                }
            }, 1500 * i)
        })
    }
}

// =============================================== FUNÇÕES DOS BOTÕES

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
    console.log(sequenciaJogador);
}

function apertaVermelho(){
    vermelho.style.backgroundColor = 'rgb(255, 0, 76)';
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
    console.log(sequenciaJogador);
}

function apertaAmarelo(){
    amarelo.style.backgroundColor = 'rgb(255, 255, 144)';
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
    console.log(sequenciaJogador);
}

function apertaAzul(){
    azul.style.backgroundColor = 'rgb(75, 159, 255)';
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
    console.log(sequenciaJogador);
}

// ================================= FUNCTION PERDEU

function perdeu(){
    document.querySelector('.verde').style.display = 'none';
    document.querySelector('.vermelho').style.display = 'none';
    document.querySelector('.amarelo').style.display = 'none';
    document.querySelector('.azul').style.display = 'none';
    setTimeout(function vocePerdeu(){
        document.querySelector('.perdeu').style.display = 'initial'
    }, 0500)
}