// Toggle js
const header = document.querySelector("header");
const navToggleWrapper = document.querySelector(".nav-toggle-wrapper");
const navContent = document.querySelector(".header-content-wrapper");
const bodyHidden = document.querySelector("body");

navToggleWrapper.addEventListener("click", () => {
  navToggleWrapper.classList.toggle("active");
  navContent.classList.toggle("active");
  bodyHidden.classList.toggle("body-hidden");
  header.classList.toggle("active");
});

// Home Hero slider js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".hero-slider.splide", {
    type: "fade",
    autoplay: true,
    perPage: 1,
    perMove: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: true,
    interval: 5000,
    speed: 1200,
    easing: "ease-in-out",

    breakpoints: {
      767: {
        pagination: false,
      },
    },
  });
  splide.mount();
});

// Scroll header js
document.addEventListener("DOMContentLoaded", function () {
  const headerWrapper = document.querySelector("header");
  addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      headerWrapper.classList.add("body-scroll");
    } else {
      headerWrapper.classList.remove("body-scroll");
    }
  });
});

// Articles splide js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".articles-splide.splide", {
    type: "slide",
    autoWidth: true,
    perMove: 3,
    pagination: false,
    gap: 25,
    breakpoints: {
      767: {
        gap: 20,
        arrows: false,
      },
    },
  });
  splide.mount();
});

// Our services js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".our-services-splide.splide", {
    type: "slide",
    autoWidth: true,
    perMove: 3,
    pagination: false,
    gap: 32,
    arrows: false,
    breakpoints: {
      767: {
        gap: 18,
      },
    },
  });
  splide.mount();
});

// Testimonial js
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonial-splide.splide", {
    // type: "loop",
    arrows: false,
    perPage: 1,
  });
  splide.mount();
});
