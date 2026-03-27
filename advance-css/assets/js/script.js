const header = document.getElementsByTagName("header");
if (header.length) {
  const header = document.querySelector("header");
  const toggleBtn = document.querySelector(".toggle-btn");
  const headerLinksContents = document.querySelector(".header-links-contents");
  const dropDownContent = document.querySelectorAll(".drop-down-content");

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    headerLinksContents.classList.toggle("active");
  });

  dropDownContent.forEach((menu) => {
    menu.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
}

// Scroll js -----
document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector("header");
  addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      headerHeight.classList.add("body-scroll");
    } else {
      headerHeight.classList.remove("body-scroll");
    }
  });
});

const productsSlider = document.querySelectorAll(".products-slider");
if (productsSlider.length) {
  var splide = new Splide(".products-slider.splide", {
    perPage: 4,
    gap: 42,
    pagination: false,
    perMove: 1,
    breakpoints: {
      1279: {
        perPage: 3,
        gap: 34,
      },
      991: {
        perPage: 2,
        gap: 28,
      },
      575: {
        perPage: 1,
      },
    },
  });
  splide.mount();
}

function getScrollbarWidth() {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px",
  );
}

(window.addEventListener("resize", getScrollbarWidth), getScrollbarWidth());

const testimonialsSection = document.querySelectorAll(".testimonials-section");
if (testimonialsSection.length) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".testimonials-slider.splide", {
      perPage: 3,
      gap: 40,
      pagination: false,
      arrows: false,
      perMove: 1,
      breakpoints: {
        991: {
          perPage: 2,
          gap: 28,
        },
        575: {
          perPage: 1,
        },
      },
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
      splide.go("-1");
    });
    document.getElementById("nextBtn").addEventListener("click", function () {
      splide.go("+1");
    });

    function updateArrows() {
      const prev = document.getElementById("prevBtn");
      const next = document.getElementById("nextBtn");

      if (splide.index === 0) {
        prev.classList.add("disabled");
      } else {
        prev.classList.remove("disabled");
      }

      if (splide.index === splide.length - splide.options.perPage) {
        next.classList.add("disabled");
      } else {
        next.classList.remove("disabled");
      }
    }

    splide.on("mounted move", updateArrows);
    splide.mount();
  });
}
