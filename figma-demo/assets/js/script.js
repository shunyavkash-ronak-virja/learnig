const navToggle = document.querySelectorAll(".toggle-overlay");
const navLinks = document.querySelectorAll(".header-link-container");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle(".active");
  navLinks.classList.toggle(".active");
});

// const navbarToggle = document.querySelector(".nav-toggle");
// const navbarMenu = document.querySelector(".nav-links");
// navbarToggle.addEventListener("click", () => {
//   navbarToggle.classList.toggle("active");
//   navbarMenu.classList.toggle("active");
// });
