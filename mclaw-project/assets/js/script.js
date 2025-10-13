// Nav toggle - - - - - - - - - -
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links-block");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Slider section - - - - - - - - - -
new Splide(".splide", {
  type: "loop",
  perPage: 1,
});
