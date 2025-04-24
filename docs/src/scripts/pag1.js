// Texto com efeito digitando
const frase = "Você sabe o que você é capaz de fazer com meus dias???";
const elemento = document.getElementById("frase");
let index = 0;

function digitar() {
  if (index < frase.length) {
    elemento.innerHTML += frase.charAt(index);
    index++;
    setTimeout(digitar, 50); // Velocidade da digitação
  }
}

// Função para o botão "Sim"
function respostaSim() {
  alert("Tem certeza? Pensa bem... Escolha de novo 😅");
  const btnSim = document.getElementById("btnSim");
  btnSim.style.display = "none"; // Esconde o botão "Sim"
}

function respostaNao() {
  // Agora leva pra pag3
  window.location.href = "pag3.html";
}


// Iniciar efeito ao carregar
digitar();
