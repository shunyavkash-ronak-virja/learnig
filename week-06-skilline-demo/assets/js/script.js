const navToggle = document.querySelector(".nav-toggle");
const headerList = document.querySelector(".header-link-container");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  headerList.classList.toggle("active");
  header.classList.toggle("active");
});

// Scroll js
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
