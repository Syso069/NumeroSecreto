function validaChute(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h1  class="titulo-principal">Game Over!!!</h2>
                <h3 class="subtitulo">Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar btn-game-over" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return
    }

    if(numeroNaoPermitido(numero)) {
       elementoChute.innerHTML += `<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}</div>`
       return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1 class="titulo-principal"> Você acertou! </h2>
        <h3 class="subtitulo"> O número secreto era ${numeroSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-up fa-rotate-180"></i> </div>` 

    } else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></i> </div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
