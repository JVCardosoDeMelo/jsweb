function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado');
        //console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listadeteclas = document.querySelectorAll('.tecla');


for (let contador = 0 ; contador < listadeteclas.length ; contador++ ) {
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }

    tecla.onkeydown = function (evento){ 


        if (evento.code == 'Enter' || evento.code =='Space' ){
            tecla.classList.remove('ativa');
            }
    }
 
   // console.log(contador);
}
