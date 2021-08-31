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

function checkPosition() {
  const windowHeight = window.innerHeight;
  animateMe.forEach(e => {
    let positionFromTop = e.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      e.classList.add('animate__animated', 'animate__fadeInUp');
    };
  });
};

window.addEventListener('scroll', checkPosition);

// Scroll to top button
toTopBtn = document.querySelector("#toTopBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;  
  document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', scrollFunction);