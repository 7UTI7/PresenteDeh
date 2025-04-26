const frase = "Você quer namorar COMIGO!!?"; // Texto a ser exibido
const elemento = document.getElementById("frase"); // Elemento que vai receber a animação

// Animação de digitação do texto
let index = 0;
function digitarTexto() {
  if (index < frase.length) {
    elemento.innerHTML += frase.charAt(index);
    index++;
    setTimeout(digitarTexto, 100); // Delay de 100ms entre as letras
  }
}

digitarTexto(); // Chama a função para começar a animação

// Função para o botão "Sim"
function respostaSim() {
  window.location.href = "pag7.html"; // Redireciona para a próxima página
}

// Função para o botão "Não" que muda de posição
function respostaNao() {
  const btnNao = document.getElementById("btnNao");
  const maxX = window.innerWidth - btnNao.offsetWidth;
  const maxY = window.innerHeight - btnNao.offsetHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  btnNao.style.position = "absolute";
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
}
