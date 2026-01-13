// Toggle js
const header = document.querySelector("header");
const navToggleWrapper = document.querySelector(".nav-toggle-wrapper");
const navContent = document.querySelector(".header-content-wrapper");
const bodyHidden = document.querySelector("body");

navToggleWrapper.addEventListener("click", () => {
  navToggleWrapper.classList.toggle("active");
  navContent.classList.toggle("active");
  bodyHidden.classList.toggle("body-hidden");
  header.classList.toggle("active");
});
