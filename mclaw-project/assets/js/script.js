// Nav toggle - - - - - - - - - -
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links-block");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Slider section - - - - - - - - - -

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    perPage: 1,
    arrows: false,
    width: "80%",
    breakpoints: {
      767: {
        width: "100%",
      },
    },
  });
  splide.mount();
});
