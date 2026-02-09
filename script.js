"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 1;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

// Fonction pour déplacer le bouton Non
function moveNoButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const btnWidth = noButton.offsetWidth;
  const btnHeight = noButton.offsetHeight;
  
  // Position aléatoire dans la fenêtre avec marges
  const randomX = Math.random() * (windowWidth - btnWidth - 60) + 30;
  const randomY = Math.random() * (windowHeight - btnHeight - 60) + 30;
  
  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  noButton.style.zIndex = "1000";
}

// Déplacement aléatoire du bouton Non au survol ET au clic
noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("mouseover", moveNoButton);

// Au clic, on déplace juste le bouton sans compter comme un vrai clic
noButton.addEventListener("click", function (e) {
  e.preventDefault();
  moveNoButton();
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("aplaga happy ");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Non",
    "Tu es sûr(e)?",
    "S'il te plaît...",
    "Ne fais pas ça :(",
    "Tu me brises le coeur",
    "Je vais pleurer...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (image === "alpaga-sad") {
    catImg.src = `img/alpaga-sad.jpeg`;
  } else if (image === "aplaga happy ") {
    catImg.src = `img/aplaga happy .webp`;
  } else {
    catImg.src = `img/${image}.jpg`;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
