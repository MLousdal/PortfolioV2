// import * as classes from '../scss/main.scss'; // For css in js

// Theme toggle
const body = document.querySelector("body");
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", toggleTheme)

function toggleTheme() {
  if (body.classList.contains("theme-light")) {
    body.classList.replace("theme-light", "theme-dark");
    toDark.classList.toggle("hide");
    toLight.classList.toggle("hide");
  } else {
    body.classList.replace("theme-dark", "theme-light");
    toLight.classList.toggle("hide");
    toDark.classList.toggle("hide");
  }
}