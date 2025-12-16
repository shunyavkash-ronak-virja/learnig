// Header toggle -----
const headerToggle = document.querySelector(".header-toggle");
const headerWrapper = document.querySelector(".heaer-contents-container");
const header = document.querySelector(".header");
const bodyHidden = document.querySelector("body");

headerToggle.addEventListener("click", () => {
  headerToggle.classList.toggle("active");
  headerWrapper.classList.toggle("active");
  header.classList.toggle("active");
  bodyHidden.classList.toggle("hiddden-overflow");
});
