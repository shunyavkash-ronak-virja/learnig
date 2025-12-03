// header toggle js
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

// submenu click js
if (window.innerWidth <= "991") {
  const menuStore = document.querySelectorAll(".submenu-wrapper");
  menuStore.forEach((val) => {
    val.addEventListener("click", (e) => {
      val.classList.toggle("visible");
    });
  });
}
