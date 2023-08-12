"use strict";

// Video 5

/* document.querySelector(".message").textContent = " Correct Number 😎😎😎";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// value property is used with input property in html for getting value inputes by user. ; 

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */

//video
let secretNumber = Math.round(Math.random() * 99) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Main Function used for DOM queryselection
  const displayFunct = function (className, message) {
    document.querySelector(className).textContent = message;
  };

  //When there is no input
  if (!guess) {
    displayFunct(".message", "No Value🏮🏮🏮🏮🏮");
  }
  //When player Wins
  else if (guess === secretNumber) {
    displayFunct(".message", "Correct Number 😎😎😎");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
    }
    displayFunct(".highscore", highscore);
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayFunct(".message", guess > secretNumber ? "Too HIGH" : " Too LOW");
      score--;
      displayFunct(".score", score);
    } else {
      displayFunct(".message", "You Lose!!!!");
      displayFunct(".score", 0);
    }
  }
});

//Coding Challenge 1
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.round(Math.random() * 99) + 1;
  score = 20;

  //Messages Default
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  //CSS Default
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//Modal Project
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
