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
let heroSlider = document.querySelectorAll(".hero-slider");
if (heroSlider.length) {
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
        991: {
          pagination: false,
        },
      },
    });
    splide.mount();
  });
}

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
let articlesSplide = document.querySelectorAll(".articles-splide");
if (articlesSplide.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".articles-splide.splide", {
      type: "slide",
      autoWidth: true,
      perMove: 3,
      pagination: false,
      drag: true,
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
}

// Our services js
let ourServices = document.querySelectorAll(".our-services-splide");
if (ourServices.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".our-services-splide.splide", {
      type: "loop",
      autoplay: true,
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
}

// Testimonial js
let testimonialSplide = document.querySelectorAll(".testimonial-splide");
if (testimonialSplide.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".testimonial-splide.splide", {
      type: "loop",
      // autoplay: true,
      arrows: false,
      gap: 20,
      perPage: 1,
    });
    splide.mount();
  });
}

// Case studies slider
let caseStudiesV2 = document.querySelectorAll(".case-studies-v2");
if (caseStudiesV2.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".case-studies-v2.splide", {
      type: "slide",
      autoplay: true,
      pagination: false,
      gap: 16,
      perPage: 1,
      breakpoints: {
        767: {
          arrows: false,
        },
      },
    });
    splide.mount();
  });
}
