// Toggle js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navToggleWrapper = document.querySelector(".nav-toggle-wrapper");
  const navContent = document.querySelector(".header-content-wrapper");
  const bodyHidden = document.querySelector("body");

  window.addEventListener("resize", () => {
    navToggleWrapper.classList.remove("active");
    navContent.classList.remove("active");
    bodyHidden.classList.remove("body-hidden");
    header.classList.remove("active");
  });

  navToggleWrapper.addEventListener("click", () => {
    navToggleWrapper.classList.toggle("active");
    navContent.classList.toggle("active");
    bodyHidden.classList.toggle("body-hidden");
    header.classList.toggle("active");
  });
});

// Header height (dynamic)
const headerElement = document.querySelector("header");
const headerHeight = headerElement.offsetHeight;
document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

// Home Hero slider js
let heroSlider = document.querySelectorAll(".hero-bg-img-splide , .hero-text-splide");
if (heroSlider.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var heroImg = new Splide(".hero-bg-img-splide.splide", {
      type: "fade",
      autoplay: true,
      rewind: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 5000,
      speed: 1200,
      easing: "ease-in-out",
      breakpoints: {
        991: {
          pagination: false,
        },
      },
    });

    var heroText = new Splide(".hero-text-splide.splide", {
      type: "fade",
      autoplay: true,
      rewind: true,
      perPage: 1,
      arrows: false,
      pagination: false,
      interval: 5000,
      speed: 1200,
      easing: "ease-in-out",
    });

    heroImg.sync(heroText);
    heroImg.mount();
    heroText.mount();
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
      autoplay: true,
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

// Products link js
let filtersContentWrapper = document.querySelectorAll(".filters-content-title-wrapper");
if (filtersContentWrapper.length) {
  document.addEventListener("DOMContentLoaded", () => {
    const titleWrappers = document.querySelectorAll(".filters-content-title-wrapper");
    titleWrappers.forEach((title) => {
      title.addEventListener("click", () => {
        const parent = title.closest(".filters-content-items");
        const listWrapper = parent.querySelector(".filters-lists-wrapper");
        title.classList.toggle("active");
        listWrapper.classList.toggle("active");
      });
    });
  });
}

/* Products item toggle js */
let productsFiltersWrapper = document.querySelectorAll(".products-filters-wrapper");

if (productsFiltersWrapper.length) {
  document.addEventListener("DOMContentLoaded", () => {
    const filtersToggle = document.querySelector(".products-filters-btn");
    const filtersContent = document.querySelector(".products-filters-content");
    const filtersClose = document.querySelector(".filters-content-close-btn");
    const bodyScroll = document.querySelector("body");

    filtersToggle.addEventListener("click", () => {
      filtersToggle.classList.toggle("active");
      filtersContent.classList.toggle("active");
      bodyScroll.classList.toggle("body-hidden");
    });

    filtersClose.addEventListener("click", () => {
      filtersToggle.classList.remove("active");
      filtersContent.classList.remove("active");
      bodyScroll.classList.remove("body-hidden");
    });
  });
}

// Product overview slider
let productOverview = document.querySelectorAll(".product-overview-wrapper");
if (productOverview.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".product-overview-splide.splide", {
      type: "fade",
      rewind: true,
      autoplay: true,
      pagination: false,
      perPage: 1,
    });
    splide.mount();
  });
}

// Nice Select js
let selectBox = document.getElementById("selectBox");
if (selectBox.length) {
  $(document).ready(function () {
    $("select").niceSelect();
  });
}

// Key features js
if (document.querySelector(".key-features-splide.splide"))
  new Splide(".key-features-splide", {
    type: "loop",
    gap: "40px",
    perPage: 3,
    pagination: !1,
    arrows: !1,
    autoScroll: { speed: 0.7 },
  }).mount(window.splide.Extensions);
