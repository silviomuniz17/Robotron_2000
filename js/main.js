// criando uma varaivel que tras o valor de um ID (#)
// criando uma varaivel que tras o valor de uma classe (.) usar o all vai trazer todas classescom esse nome
// criando uma variavel que tras o valor de uma propiedade do tipo data

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// criando um console que recebe os dados do elemento click
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function trocaImagem(cor){
    document.querySelector(".robo").src="Robotrons/Robotron_2000_" + cor + "/robotron.png";
}

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    // trazendo o valor que tem na variavel criada referente a onde foi clicado
    console.log(pecas[peca]);

    //forEach é um arrei para percorrer todos os elemetos assim consigo atualizar o valores de tudo
    estatisticas.forEach( (elemento ) => {
        //com esse log consigo ver o nome da estatistica que precisa atualizar
        console.log(elemento.dataset.estatistica);
        //esse console eu estou pegando todos os elemento que já estão na estatisticas
        console.log(elemento.textContent);

        //ele vai receber o valor atual =
                                // converte para inteiro o valor atualo
                                                            // + somar o valor da peça (Variavel)
                                                                            // no item do elemento estatisticas
        // isso tudo foi buscado no log á sima
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}
