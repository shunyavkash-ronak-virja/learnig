// header toggle js ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-content-container");
const hidden = document.querySelector("body");

window.addEventListener("resize", () => {
  navLinks.classList.remove("active");
  navToggle.classList.remove("active");
  hidden.classList.remove("hidden");
});

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  hidden.classList.toggle("hidden");
});

// submenu click js ----------
const menuStore = document.querySelectorAll(".submenu-wrapper");
menuStore.forEach((val) => {
  val.addEventListener("click", (e) => {
    val.classList.toggle("visible");
  });
});

// Header hight ----------
const headerElement = document.querySelector(".header");
const headerHeight = headerElement.offsetHeight + 16;
document.documentElement.style.setProperty(
  "--header-height",
  `${headerHeight}px`
);

// Submenu link width
document.addEventListener("DOMContentLoaded", function () {
  const headerLinks = document.querySelectorAll(".submenu-wrapper");
  headerLinks.forEach((link) => {
    const linkWidth = link.offsetWidth - 3.9;
    link.style.setProperty("--link-width", `${linkWidth}px`);
  });
});
