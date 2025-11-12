// Nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-content-wrapper");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//Splide js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".hero-slider", {
    type: "loop",
    // autoplay: true,
    pauseOnFocus: true,
    perPage: 1,
    arrows: false,
  });
  splide.mount();
});
