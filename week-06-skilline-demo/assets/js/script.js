const navToggle = document.querySelector(".nav-toggle");
const headerList = document.querySelector(".header-link-container");
const header = document.querySelector(".header");
// const bodyScroll = document.querySelector("body");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  headerList.classList.toggle("active");
  header.classList.toggle("active");
  //   bodyScroll.classList.toggle("body-scroll");
});

// Fancybox js -----
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});
});
