const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-link-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
