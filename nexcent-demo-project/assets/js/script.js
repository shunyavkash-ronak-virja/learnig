// Nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-content-wrapper");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Hero Splide js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".hero-slider", {
    type: "loop",
    autoplay: true,
    pauseOnFocus: true,
    perPage: 1,
    arrows: false,
  });
  splide.mount();
});

// Our-clients Splide js
if (document.querySelector(".our-clients-slider.splide"))
  new Splide(".our-clients-slider", {
    type: "loop",
    // autoplay: true,
    gap: 80,
    pagination: !1,
    arrows: !1,
    perPage: !7,
    autoWidth: !0,
    autoScroll: { speed: 0.7 },
  }).mount(window.splide.Extensions);
