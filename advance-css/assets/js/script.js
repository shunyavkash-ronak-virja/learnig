const header = document.getElementsByTagName("header");
if (header.length) {
  const toggleBtn = document.querySelector(".toggle-btn");
  const headerLinksWrapper = document.querySelector(".header-links-wrapper");
  const dropDownContent = document.querySelectorAll(".drop-down-content");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    headerLinksWrapper.classList.toggle("active");
  });

  dropDownContent.forEach((menu) => {
    menu.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
}
