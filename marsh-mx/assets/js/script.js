document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return; // stop if no header exists

  const toggleBtn = document.querySelector(".header-toggle");
  const responsiveItemsWrapper = document.querySelector(".responsive-items-wrapper");
  const menuCloseBtn = document.querySelector(".header-menu-close-icon");

  const wrappers = document.querySelectorAll(".stack-wrapper");
  const toggleLinks = document.querySelectorAll("[data-target-menu]");
  const backBtn = document.querySelector(".go-back-btn");

  let currentIndex = 0;

  // 🔹 Update Menu State
  function updateMenu(index) {
    wrappers.forEach((wrapper, i) => {
      wrapper.classList.remove("active", "is-previous");

      if (i < index) wrapper.classList.add("is-previous");
      if (i === index) wrapper.classList.add("active");
    });

    // Back button animation
    if (backBtn) {
      if (index === 0) {
        backBtn.classList.remove("active");
      } else {
        backBtn.classList.add("active");
      }
    }

    currentIndex = index;
  }

  // 🔹 Open Mobile Menu
  if (toggleBtn && responsiveItemsWrapper) {
    toggleBtn.addEventListener("click", () => {
      responsiveItemsWrapper.classList.toggle("active");
    });
  }

  // 🔹 Close Mobile Menu
  if (menuCloseBtn && responsiveItemsWrapper) {
    menuCloseBtn.addEventListener("click", () => {
      responsiveItemsWrapper.classList.remove("active");
      updateMenu(0); // reset to first level when closed
    });
  }

  // 🔹 Open Next Level
  toggleLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.dataset.targetMenu;
      const targetMenu = document.getElementById(targetId);
      if (!targetMenu) return;

      const targetWrapper = targetMenu.closest(".stack-wrapper");
      const targetIndex = [...wrappers].indexOf(targetWrapper);

      if (targetIndex !== -1) {
        updateMenu(targetIndex);
      }
    });
  });

  // 🔹 Go Back
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        updateMenu(currentIndex - 1);
      }
    });
  }

  // 🔹 Initial State
  updateMenu(0);
});

//     const toggleLinks = document.querySelectorAll("[data-target-menu]");
//     const wrappers = document.querySelectorAll(".stack-wrapper");

//     toggleLinks.forEach((link) => {
//       link.addEventListener("click", function () {
//         const targetId = this.dataset.targetMenu;
//         const targetMenu = document.getElementById(targetId);
//         if (!targetMenu) return;
//         const targetWrapper = targetMenu.closest(".stack-wrapper");
//         const firstWrapper = wrappers[0];
//         firstWrapper.classList.add("is-previous");
//         targetWrapper.classList.add("active");
//       });
//     });
//   });
