import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log(cardGenerator());
};

//variables
const simbolos = ['♥', '♠', '♦', '♣'];
const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//Funciones
const randomMaker = arr => Math.floor(Math.random() * arr.length); //genera posicion
const valueElement = arr => arr[randomMaker(arr)]; // genera valor
//Creacion de carta
const cardGenerator = () => {
  const symbol = valueElement(simbolos); //Almacenamos en una varibale el simbolo generado de forma aleatoria
  const number = valueElement(numeros); // Almacenamos el numero generado de forma aleatoria
  const color = (symbol == '♥' || symbol == '♦') ? 'red' : 'black'; // Almacenamos un color dentro de una ternaria
  const newCard = document.createElement("div");
  newCard.classList.add("card", "my-card", "d-flex", "flex-column", "justify-content-between", "m-auto");
  newCard.classList.add("border-2", "mt-4", "mb-5");
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("d-flex", "justify-content-start", "header");
  cardHeader.style.color = color;
  cardHeader.innerHTML = `<h3 class="symbol-card header">${symbol}</h3>`
  const cardBody = document.createElement("div");
  cardBody.classList.add("d-flex", "justify-content-center");
  cardBody.style.color = color;
  cardBody.innerHTML = `<h3 class="number-card fw-bold">${number}</h3>`
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("d-flex", "justify-content-end", "footer");
  cardFooter.style.color = color;
  cardFooter.innerHTML = `<h3 class="symbol-card footer">${symbol}</h3>`
  newCard.appendChild(cardHeader);
  newCard.appendChild(cardBody);
  newCard.appendChild(cardFooter);
  document.querySelector("body").appendChild(newCard);
  return newCard;
}
const UpdateCard=(existeCard)=>{
  const symbol = valueElement(simbolos);
  const number=valueElement(numeros);
  const color = (symbol == '♥' || symbol == '♦') ? 'red' : 'black';

  const cardHeader=existeCard.querySelector(".symbol-card.header");
  cardHeader.innerHTML = `<h3 class="symbol-card header">${symbol}</h3>`
  cardHeader.style.color=color;
  const cardBody=existeCard.querySelector(".number-card");
  cardBody.innerHTML = `<h3 class="number-card fw-bold">${number}</h3>`
  cardBody.style.color=color;
  const cardFooter=existeCard.querySelector(".symbol-card.footer");
  cardFooter.innerHTML = `<h3 class="symbol-card footer">${symbol}</h3>`;
  cardFooter.style.color=color;
}
const button = document.createElement("button");
button.classList.add("btn", "btn-primary", "button");
button.textContent = "Generar Carta"
document.body.appendChild(button);
//evento
button.addEventListener("click", ()=>{
  const existeCard = document.querySelector(".card");
  existeCard? UpdateCard(existeCard): cardGenerator();
});

