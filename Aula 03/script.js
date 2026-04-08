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
    if (Texto.style.display === "none") {
        Texto.style.display = "block";
      } else {
        Texto.style.display = "none";
      }
    }


const botaoTema = document.getElementById("alternarTema");

botaoTema.onclick = function() {
    if (document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "white") {
        // Modo Escuro
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "white";
        botaoTema.innerText = "Mudar para Modo Claro";
    } else {
        // Modo Claro
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botaoTema.innerText = "Mudar para Modo Escuro";
    }
};