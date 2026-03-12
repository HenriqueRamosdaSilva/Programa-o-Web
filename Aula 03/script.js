function mostrarMensagem(){
alert("Olá! Você clicou no botão.");
}
const titulo = document.querySelector("#titulo");

function MudarTitulo(){
titulo.textContent = "JavaScript é interativo!";
}

const MudarCorDaPagina = document.querySelector("#cor");

MudarCorDaPagina.addEventListener("click", MudarCor);

function MudarCor() {
    document.body.style.backgroundColor = "lightblue";
}


const botao = document.getElementById("acrecentar");
const contador = document.getElementById("Contador");
let contadorAtual = 0;

function atualizarContador() {
    contador.textContent = "Contador: " + contadorAtual;
}

botao.addEventListener("click",Adicionar );

function Adicionar() {
    contadorAtual++;    
    atualizarContador();  
}
atualizarContador();  




const Ocultar = document.getElementById("Ocultar");
const Texto = document.getElementById("Texto");

Ocultar.addEventListener("click",Ocultar_Texto );
function Ocultar_Texto() {
    elemento.style.display = "Texto"; 
}
