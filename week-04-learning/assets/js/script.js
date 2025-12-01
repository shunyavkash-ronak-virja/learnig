const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-content-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
