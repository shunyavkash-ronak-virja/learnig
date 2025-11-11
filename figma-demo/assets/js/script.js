// Header toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".header-links-wrapper");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Slider js
if (document.querySelector(".client-logo-slider.splide"))
  new Splide(".client-logo-slider", {
    type: "loop",
    // autoplay: true,
    gap: "24px",
    pagination: !1,
    arrows: !1,
    autoWidth: !0,
    autoScroll: { speed: 0.7 },
  }).mount(window.splide.Extensions);
