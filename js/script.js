// Adiciona a classe 'navegacao__item--ativo' ao link da página atual
var currentPage = window.location.href;
var navLinks = document.querySelectorAll(".navegacao__link");
navLinks.forEach(function (link) {
  link.classList.remove("navegacao__item--ativo");
  if (link.href === currentPage) {
    link.classList.add("navegacao__item--ativo");
  }
});

// Troca tema claro para escuro
const toggleSwitch = document.getElementById("themeSwitch");
const iconGitHub = document.querySelector(".links__rede-github");
const iconLinkedIn = document.querySelector(".links__rede-linkedin");

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    toggleSwitch.checked = true;
    changeElements("dark");
  }
};

document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme") || "light"
);

function changeElements(theme) {
  document.documentElement.setAttribute("data-theme", `${theme}`);
  if (iconGitHub && iconLinkedIn) {
    iconGitHub.setAttribute("src", `./assets/images/icon_github--${theme}.png`);
    iconLinkedIn.setAttribute(
      "src",
      `./assets/images/icon_linkedin--${theme}.png`
    );
  }
  localStorage.setItem("theme", `${theme}`);
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    changeElements("dark");
  } else {
    changeElements("light");
  }
}

// Para efeito e digitação. Adaptado de https://codepen.io/Asadabbas/pen/joVKGE
var i = 0;
var tag = document.querySelector(".apresentacao__conteudo__titulo");
var html = document.querySelector(".apresentacao__conteudo__titulo");

if (html) {
  html = html.innerHTML;
  var attr = tag.setAttribute("data", html);

  var txt = tag.getAttribute("data");
  var speed = 170;

  function typeWriter() {
    if (i < txt.length) {
      if (txt.charAt(i) === "<") {
        var endIndex = txt.indexOf(">", i);
        document.querySelector(".apresentacao__conteudo__titulo").innerHTML =
          txt.slice(0, endIndex + 1);
        i = endIndex + 1;
      } else {
        document.querySelector(".apresentacao__conteudo__titulo").innerHTML =
          txt.slice(0, i + 1);
        i++;
      }
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

let currentImageIndex = 0;

function changeImage(step) {
  const images = [
    "../assets/images/projects/fokus.png",
    "../assets/images/projects/guess-my-number.png",
    "../assets/images/projects/pig-game.png",
  ];

  const texto = [
    `
    <h2 class="texto__titulo titulo-destaque-amarelo">Fokus</h2>
    <p class="texto__resumo">
        Fokus é um projeto de pomodoro timer com uma lista de tarefas.
    </p>
    <div class="texto__langs">
        <img width="32px" height=32px src="../assets/images/icon_html-5.png" alt="HTML ícone">
        <img width="32px" height=32px src="../assets/images/icon_css-3.png" alt="CSS ícone">
        <img width="32px" height=32px src="../assets/images/icon_js.png" alt="JS ícone">
    </div>
    `,

    `
    <h2 class="texto__titulo titulo-destaque-amarelo">Adivinhe meu número</h2>
    <p class="texto__resumo">
        O Adivinhe meu numero é um jogo que seleciona "aleatoriamente" um número de 1 a 20 e o usuário precisa acertá-lo.
    </p>
    <div class="texto__langs">
        <img width="32px" height=32px src="../assets/images/icon_html-5.png" alt="HTML ícone">
        <img width="32px" height=32px src="../assets/images/icon_css-3.png" alt="CSS ícone">
        <img width="32px" height=32px src="../assets/images/icon_js.png" alt="JS ícone">
    </div>
    `,
    `
    <h2 class="texto__titulo titulo-destaque-amarelo">Pig Game</h2>
    <p class="texto__resumo">
        No Pig game os jogadores se revezam para rolar um único dado somando todos os resultados da rolagem a 
        uma pontuação geral, mas perdendo a pontuação obtida 
        no turno se rolarem 1.
    </p>
    <div class="texto__langs">
        <img width="32px" height=32px src="../assets/images/icon_html-5.png" alt="HTML ícone">
        <img width="32px" height=32px src="../assets/images/icon_css-3.png" alt="CSS ícone">
        <img width="32px" height=32px src="../assets/images/icon_js.png" alt="JS ícone">
    </div>
    `
    /*   
    <a class="texto__link" href="https://ana-rabelo.github.io/fokus/" target="_blank">ACESSAR PROJETO →</a>
    
    <a class="texto__link" href="https://ana-rabelo.github.io/guess-my-number/" target="_blank">ACESSAR PROJETO →</a>
    
    <a class="texto__link" href="https://ana-rabelo.github.io/pig-game/" target="_blank">ACESSAR PROJETO →</a>
 */
  ];

  const links = [
    `	<img src="../assets/images/projects/fokus.png" alt="Imagem Projeto Fokus" class="conteudo__imagens-projeto">
                
    <div class="conteudo__imagens-icons">
        <a href="https://github.com/ana-rabelo/fokus" class="icon__view-code" target="_blank">
            <img width=32px height=32px src="./assets/images/icon_code.png" alt="">
        </a>
        <a href="https://ana-rabelo.github.io/fokus/" class="icon__view-project" target="_blank">
            <img width="32px" height=32px src="./assets/images/icon_eye.png" alt="">
        </a>
    </div>`,
    ` <img src="../assets/images/projects/guess-my-number.png" alt="Imagem Projeto Adivinhe meu número" class="conteudo__imagens-projeto">
                
    <div class="conteudo__imagens-icons">
        <a href="https://github.com/ana-rabelo/guess-my-number" class="icon__view-code" target="_blank">
            <img width=32px height=32px src="./assets/images/icon_code.png" alt="">
        </a>
        <a href="https://ana-rabelo.github.io/guess-my-number/" class="icon__view-project" target="_blank">
            <img width="32px" height=32px src="./assets/images/icon_eye.png" alt="">
        </a>
    </div>`,
    ` <img src="../assets/images/projects/pig-game.png" alt="Imagem jogo Pig Game" class="conteudo__imagens-projeto">
                
    <div class="conteudo__imagens-icons">
        <a href="https://github.com/ana-rabelo/pig-game" class="icon__view-code" target="_blank">
            <img width=32px height=32px src="./assets/images/icon_code.png" alt="">
        </a>
        <a href="https://ana-rabelo.github.io/pig-game/" class="icon__view-project" target="_blank">
            <img width="32px" height=32px src="./assets/images/icon_eye.png" alt="">
        </a>
    </div>`
  ];

  currentImageIndex += step;
  if (currentImageIndex < 0) {
    console.log(currentImageIndex);
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  const imgElement = document.querySelector(
    ".habilidades__conteudo__imagens img"
  );
  imgElement.src = images[currentImageIndex];

  const textoElement = document.querySelector(".habilidades__conteudo__texto");
  textoElement.innerHTML = texto[currentImageIndex];

  const imgLinksElement = document.querySelector(".conteudo__imagens");
  imgLinksElement.innerHTML = links[currentImageIndex];
}

document.querySelector(".prev").addEventListener("click", () => changeImage(-1));
document.querySelector(".next").addEventListener("click", () => changeImage(1));
