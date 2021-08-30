// import * as classes from '../scss/main.scss'; // For css in js

// Scroll arrow

const arrow = document.querySelector("#arrow");
const cases = document.querySelector("#cases");

arrow.addEventListener("click", () => {
  cases.scrollIntoView();
});

// Theme toggle
const body = document.querySelector("body");
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("theme-light")) {
    body.classList.replace("theme-light", "theme-dark");
  } else {
    body.classList.replace("theme-dark", "theme-light");
  }
});


// Animations
import "animate.css";

const animateMe = document.querySelectorAll(".animateMe");
const windowHeight = window.innerHeight;

body.onscroll = checkPosition;

function checkPosition() {
  animateMe.forEach(e => {
    let positionFromTop = e.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      e.classList.add('animate__animated', 'animate__fadeInUp');
    };
  });
};