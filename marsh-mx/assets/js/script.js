document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".header-toggle");
  const headerItemWrapper = document.querySelector(".header-items-wrapper");
  const menuCloseBtn = document.querySelector(".header-menu-close-icon");

  if (!toggleBtn || !headerItemWrapper) return;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    headerItemWrapper.classList.toggle("active");
  });

  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      headerItemWrapper.classList.remove("active");
    });
  }
});
