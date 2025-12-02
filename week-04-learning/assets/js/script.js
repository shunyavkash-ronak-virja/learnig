const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-content-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

if (window.innerWidth <= "991") {
  const menuStore = document.querySelectorAll(".submenu-wrapper");
  menuStore.forEach((val) => {
    val.addEventListener("click", (e) => {
      val.classList.toggle("visible");
    });
  });
}
