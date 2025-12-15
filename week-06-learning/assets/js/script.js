// Header toggle -----
const headerToggle = document.querySelector(".header-toggle");
const headerWrapper = document.querySelector(".heaer-contents-container");

headerToggle.addEventListener("click", () => {
  headerToggle.classList.toggle("active");
  headerWrapper.classList.toggle("active");
});
