//npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

//BODY
let body = document.querySelector("body");

//ABRIR E FECHAR MENU

let menuButton = document.getElementById("menu");
let menu = document.getElementById("options");

let imagem = "";

menuButton.addEventListener("click", () => {
  menuButton.classList.add("opacity-0");

  setTimeout(() => {
    if (imagem == "img/closeWhite.png") {
      menuButton.src = "img/menuWhite.png";
      imagem = "img/menuWhite.png";
    } else {
      menuButton.src = "img/closeWhite.png";
      imagem = "img/closeWhite.png";
    }

    menuButton.classList.remove("opacity-0");

    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");
  }, 200);
});

//DAR TRANSPARENCIA PARA O HEADER

let header = document.querySelector("header");

body.addEventListener("wheel", () => {
  setTimeout(() => {
    let distanciaTopo = window.scrollY;

    if (distanciaTopo < 30) {
      header.classList.replace("bg-[#0b1120d8]", "bg-[#0b1120]");
      header.classList.remove("shadow-sm");
      header.classList.remove("shadow-[#ffffffbb]");
    } else {
      header.classList.replace("bg-[#0b1120]", "bg-[#0b1120d8]");
      header.classList.add("shadow-sm");
      header.classList.add("shadow-[#ffffffbb]");
    }
  }, 150);
});

//TEMPORIZADOR MAIN

let pmain = document.getElementById("temporazidorMain");

let temporazidorMain = setTimeout(() => {
  if (pmain.innerHTML == 0) {
    clearInterval(temporizadorMain);
  }

  pmain.innerHTML -= 1;
}, 1000);

//TEMPORADIZDOR DA SECAO DE TESTE

let temporazidorTeste = document.getElementById("temporizador");
let iniciarTeste = document.getElementById("iniciarTeste");

let tempooriginal = 1500;
let tempo = 1500;

let intervalo = ""

//ELEMENTO DO SVG
let circleTest = document.getElementById("circleTest")

function cronom(){
  iniciarTeste.disabled = "true"
  
  circleTest.style.animation = "cronometroTeste " + tempooriginal + "s linear"

  intervalo = setInterval(() => {

    if (tempo == 0) {
      clearInterval(intervalo);
      iniciarTeste.disabled = false
    } else {
      --tempo;

      let minuto = (tempo / 60).toFixed(10);
      let segundos = tempo % 60;

      if (segundos < 10) {
        segundos = "0" + segundos;
      }

      if (minuto < 10) {
        minuto = "0" + minuto;
      }

      temporazidorTeste.innerHTML = minuto[0] + minuto[1] + ":" + segundos;
    }
  }, 1000);
}

//INICIAR TEMPORIZADOR
iniciarTeste.addEventListener("click", () => {
  cronom()
});
//DEFINIR O TEMPO

document.getElementById("pausa").addEventListener("click", () => {
  tempo = 300;
  tempooriginal = 300;
  temporazidorTeste.innerHTML = "05:00";


  ReiniciarTeste()
});

document.getElementById("pausaLonga").addEventListener("click", () => {
  tempo = 900;
  tempooriginal = 900;
  temporazidorTeste.innerHTML = "15:00";

  ReiniciarTeste()
});

document.getElementById("foco").addEventListener("click", () => {
  tempo = 1500;
  tempooriginal = 1500;
  temporazidorTeste.innerHTML = "25:00";

  ReiniciarTeste()
});

//REINICIAR CRONOMETRO

let ReiniciarTeste = document.getElementById("ReiniciarTeste");

ReiniciarTeste.addEventListener("click", ReiniciarTeste = () => {
  tempo = tempooriginal;
  clearInterval(intervalo)
  iniciarTeste.disabled = false
  temporazidorTeste.innerHTML = tempo / 60 > 10 ? tempo / 60 + ":" + 0 + 0 : "0" + tempo / 60 + ":" + 0 + 0

  //SVG
  circleTest.style.animation = ""
});
