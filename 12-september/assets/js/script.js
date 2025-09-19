// Navbar js
const navbarToggle = document.querySelector(".nav-toggle");
const navbarMenu = document.querySelector(".nav-links-wrapper");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Splide js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    // type: "loop",
    // autoplay: "true",
    // pauseOnHover: "true",
    // perPage: 3,
    width: "70%",
    // gap: 16pageXOffset;
  });
  splide.mount();
});
