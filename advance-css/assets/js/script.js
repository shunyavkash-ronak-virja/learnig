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
