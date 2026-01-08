const navToggle = document.querySelector(".nav-toggle");
const headerList = document.querySelector(".header-link-container");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  headerList.classList.toggle("active");
  header.classList.toggle("active");
});

// Scroll js -----
document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector(".header");
  addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      headerHeight.classList.add("body-scroll");
    } else {
      headerHeight.classList.remove("body-scroll");
    }
  });
});

// Fancybox js -----
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});
});

// Testimonial js -----
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonial-slider.splide", {
    type: "fade",
    pagination: false,
    arrows: false,
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    splide.go("-1");
  });
  document.getElementById("nextBtn").addEventListener("click", function () {
    splide.go("+1");
  });

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateArrows() {
    const currentIndex = splide.index;
    const lastIndex = splide.length - 1;
    if (currentIndex === 0) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "flex";
    } else if (currentIndex === lastIndex) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    }
  }

  splide.on("mounted move", updateArrows);
  splide.mount();
});
