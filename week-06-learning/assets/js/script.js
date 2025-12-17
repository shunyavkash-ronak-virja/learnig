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

// Header scroll event
const headerHeight = document.querySelector(".header");
addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    headerHeight.classList.add("header-scroll");
  } else {
    headerHeight.classList.remove("header-scroll");
  }
});
