// Toggle js
const navToggle = document.querySelector(".nav-toggle");
const navContent = document.querySelector(".header-content-wrapper");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navContent.classList.toggle("active");
});
