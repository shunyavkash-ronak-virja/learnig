// Header toggle -----
const headerToggle = document.querySelector(".header-toggle");
const headerWrapper = document.querySelector(".heaer-contents-container");
const header = document.querySelector(".header");
const bodyHidden = document.querySelector("body");

headerToggle.addEventListener("click", () => {
  headerToggle.classList.toggle("active");
  headerWrapper.classList.toggle("active");
  header.classList.toggle("header-bg");
  bodyHidden.classList.toggle("hiddden-overflow");
});

// Nice select js -----
$(document).ready(function () {
  $("select").niceSelect();
});

// Header scroll event -----
document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector(".header");
  addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      headerHeight.classList.add("header-scroll");
    } else {
      headerHeight.classList.remove("header-scroll");
    }
  });
});

// Fancybox js -----
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});
});

// Travel agency slider -----
if (document.querySelector(".splide.travel-agency-splide"))
  new Splide(".travel-agency-splide", {
    type: "loop",
    gap: "30px",
    perPage: 5,
    pagination: false,
    arrows: false,
    autoScroll: { speed: 0.7 },
    breakpoints: {
      991: {
        gap: "30px",
        perPage: 4,
      },
      575: {
        gap: "35px",
        perPage: 3,
      },
    },
  }).mount(window.splide.Extensions);

// Testimonials slider -----
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide.testimonials-splide", {
    type: "loop",
    // autoplay: true,
    direction: "ttb",
    height: "356px",
    perPage: 1,
    breakpoints: {
      424: {
        height: "468px",
      },
    },
  });
  splide.mount();
});
