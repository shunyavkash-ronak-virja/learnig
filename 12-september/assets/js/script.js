const navbarToggle = document.querySelector(".nav-toggle");
const navbarMenu = document.querySelector(".nav-links-wrapper");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
