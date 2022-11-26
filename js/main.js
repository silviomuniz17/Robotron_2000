// criando uma varaivel que traz o valor de um ID
const robotron = document.querySelector("#robotron");
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// criando um evento que ao clicar chamando uma função anonima não podendo chamar em outro momento
// outra forma de criar uma função anonima é ( "click", () => { }
// para trazer o evento de quando clico em uma função precisa colocar evento
robotron.addEventListener("click", function (evento) {
    console.log(evento);
});


// função criada para imprimir no console (passando um parametro no caso é um nome )
function dizOi(nome) {
    console.log("Oi " + nome);
    console.log("Bem Vindo ao Robotron 2000");
}

// chamando essa função sempre que carrega a pagina
dizOi("Silvio Muniz");

//função somar está ( recebenco o valor do braço = passar ele para int(valor do braço) + 1 )
somar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
})

//função subtrair está ( recebenco o valor do braço = passar ele para int(valor do braço) - 1 )
subtrair.addEventListener("click", () => {
    braco.value = parseInt(braco.value) - 1;
})
