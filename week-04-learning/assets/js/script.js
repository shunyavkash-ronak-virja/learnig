const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-content-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const menuStore = document.querySelectorAll(".submenu-wrapper");
// const subMenu = document.querySelectorAll(".link-dropdown-container");

menuStore.forEach((val) => {
  val.addEventListener("click", (e) => {
    val.classList.toggle("visible");
  });
});
