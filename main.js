function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    console.log(elemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento nao encontrado ou seletor nao encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const idAudio = `#som_${tecla.classList[1]}`; // template string
    
    tecla.onclick = function () {  // Funcao anonima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if ( (evento.code === 'Space') || (evento.code === 'Enter') ) {
            tecla.classList.add('ativa');
        }

        if (evento.code === 'KeyQ') {
            listaDeTeclas[0].classList.add('ativa');
            tocaSom('#som_tecla_pom');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
        listaDeTeclas[0].classList.remove('ativa');
    }

}
