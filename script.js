//npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

//BODY
let body = document.querySelector("body");

//ABRIR E FECHAR MENU

let menuButton = document.getElementById("menu");
let menu = document.getElementById("options");

let imagem = ""

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
    
    menu.classList.toggle("opacity-0")
    menu.classList.toggle("pointer-events-none")
}, 200);
});

//DAR TRANSPARENCIA PARA O HEADER

let header = document.querySelector("header")

body.addEventListener("wheel", () => {
  
  setTimeout(() => {
    let distanciaTopo = window.scrollY

    if(distanciaTopo < 30){
      header.classList.replace("bg-[#0b1120d8]", "bg-[#0b1120]")
      header.classList.remove("shadow-sm")
      header.classList.remove("shadow-[#ffffffbb]")

    }else{
      header.classList.replace("bg-[#0b1120]", "bg-[#0b1120d8]")
      header.classList.add("shadow-sm")
      header.classList.add("shadow-[#ffffffbb]")
    }

  }, 150);
})

//TEMPORIZADOR MAIN

let pmain = document.getElementById("temporazidorMain")

let temporazidorMain = setInterval(() => {
  if(pmain.innerHTML == 0){
      clearInterval(temporizadorMain)
    }
  
  
  pmain.innerHTML -= 1

}, 1000);