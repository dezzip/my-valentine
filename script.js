"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const counterElement = document.querySelector("#counter");
const confettiContainer = document.getElementById("confetti-container");

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

// Au clic, on déplace juste le bouton sans compter comme un vrai clic
noButton.addEventListener("click", function (e) {
  e.preventDefault();
  moveNoButton();
});

// Déplacement aléatoire du bouton Non au survol ET au clic
noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("mouseover", moveNoButton);

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
  
  // Incrémenter le compteur
  noCount++;
  updateCounter();
  
  // Jouer le son
  playSound("click-sound");
}

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! <br> Welcome to my Jurassic Park!";
  buttonsContainer.classList.add("hidden");
  changeImage("aplaga happy ");
  
  // Jouer le son de succes
  playSound("success-sound");
  
  // Jouer la musique Jurassic Park apres 1 seconde
  setTimeout(() => {
    playSound("jurassic-park");
  }, 1000);
  
  // Créer des confettis
  createConfetti();
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
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

function updateCounter() {
  counterElement.textContent = noCount;
}

// Fonction pour jouer les sons
function playSound(soundId) {
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Son non disponible:", err));
  }
}

// Fonction pour créer des confettis
function createConfetti() {
  const colors = ["#f53699", "#40c057", "#ffd700", "#ff69b4", "#00bfff"];
  
  // Créer 50 confettis
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = confetti.style.width;
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
      
      confettiContainer.appendChild(confetti);
      
      // Supprimer après l'animation
      setTimeout(() => confetti.remove(), 3000);
    }, i * 30);
  }
}
