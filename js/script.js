// Adiciona a classe 'navegacao__item--ativo' ao link da página atual
var currentPage = window.location.href;
var navLinks = document.querySelectorAll('.navegacao__link');
navLinks.forEach(function(link) {
    link.classList.remove('navegacao__item--ativo');
    if (link.href === currentPage) {
        link.classList.add('navegacao__item--ativo');
    }
});

// Troca tema claro para escuro
const toggleSwitch = document.getElementById('themeSwitch');
const iconGitHub = document.querySelector('.links__rede-github');
const iconLinkedIn = document.querySelector('.links__rede-linkedin');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconGitHub.setAttribute('src', './assets/images/icon_github.png');
        iconLinkedIn.setAttribute('src', './assets/images/icon_linkedin.png');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        iconGitHub.setAttribute('src', './assets/images/icon_github--coral-claro.png');
        iconLinkedIn.setAttribute('src', './assets/images/icon_linkedin--coral-claro.png');
      }
}

var nomeCompleto = "Ana Rabelo";
var atraso = 200;
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");
var contadorDeLetras = 0;
var nome = "";
var sobrenome = "";

var partesNome = nomeCompleto.split(" ");
if (partesNome.length > 1) {
  nome = partesNome[0];
  sobrenome = partesNome.slice(1).join(" ");
} else {
  nome = nomeCompleto;
}

function escreverTexto() {
  if (contadorDeLetras < nome.length) {
    textoElemento.textContent += nome.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  } else {
    textoElemento.innerHTML += " <strong>" + sobrenome + "</strong>";
  }
}

escreverTexto();
