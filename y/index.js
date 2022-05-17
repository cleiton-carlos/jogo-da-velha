alert("o jogador que começar a jogar primeiro vai ficar com o 'X' , e o outro jogador vai ficar com o 'O'");

let jogador1 = 'x';
let jogador2 = 'o';

let numero = 0;//varivel criada para quando o jogo der velha

let jogadorDaVez = jogador1;

let campos = document.querySelectorAll('.dv');
let mensagemJogo = document.querySelector('.mensagemDoJogo');

for (let i = 0; i < campos.length; i++) {
  campos[i].addEventListener("click" , function (event) {
    this.textContent = jogadorDaVez;
    numero++;
    
    if (event.detail === 2) {
      mensagemJogo.textContent = "você so pode jogar uma vez";      
      numero = 0;
      removeTextoLentamente();
      limpaCampos();
    }
    
    if (jogadorDaVez == jogador1) {
      jogadorDaVez = jogador2;
    } else {
      jogadorDaVez = jogador1;
    }
    
    if (campos[0].textContent == 'x' && campos[1].textContent == 'x' && campos[2].textContent == 'x') { 
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou";
      limpaCampos();

    } else if(campos[0].textContent == 'o' && campos[1].textContent == 'o' && campos[2].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou";
      limpaCampos();

    } else if (campos[3].textContent == 'x' && campos[4].textContent == 'x' && campos[5].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[3].textContent == 'o' && campos[4].textContent == 'o' && campos[5].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[6].textContent == 'x' && campos[7].textContent == 'x' && campos[8].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[6].textContent == 'o' && campos[7].textContent == 'o' && campos[8].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[0].textContent == 'x' && campos[3].textContent == 'x' && campos[6].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[0].textContent == 'o' && campos[3].textContent == 'o' && campos[6].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[1].textContent == 'x' && campos[4].textContent == 'x' && campos[7].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[1].textContent == 'o' && campos[4].textContent == 'o' && campos[7].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[2].textContent == 'x' && campos[5].textContent == 'x' && campos[8].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[2].textContent == 'o' && campos[5].textContent == 'o' && campos[8].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[0].textContent == 'x' && campos[4].textContent == 'x' && campos[8].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[0].textContent == 'o' && campos[4].textContent == 'o' && campos[8].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com o 'O' ganhou"
      limpaCampos();

    } else if (campos[2].textContent == 'x' && campos[4].textContent == 'x' && campos[6].textContent == 'x') {
      mensagemJogo.textContent = "o jogador que jogou com o 'X' ganhou"
      limpaCampos();

    } else if (campos[2].textContent == 'o' && campos[4].textContent == 'o' && campos[6].textContent == 'o') {
      mensagemJogo.textContent = "o jogador que jogou com 'O' ganhou"
      limpaCampos();

    } else if (numero == 9) {
      nenhumGanhador();
    }
  })
}

function nenhumGanhador() {
  mensagemJogo.textContent = "nenhum dos jogadores ganharam";
  setTimeout(function () {
    for (let n of campos) {
      mensagemJogo.textContent = " ";
      n.textContent = " ";

      if (n.textContent == " ") {
        jogadorDaVez = jogador1;
        numero = 0;
      }
    }
  }, 2000)
}

function limpaCampos () {
  setTimeout(function () {
    for (let n of campos) {
      mensagemJogo.textContent = " ";
      n.textContent = " ";

      if (n.textContent == " ") {
        jogadorDaVez = jogador1;
        numero = 0;
      }
    }
  }, 2000)
}

function removeTextoLentamente () {
  setTimeout(() => {
    mensagemJogo.textContent = " ";
  }, 3000) 
}












