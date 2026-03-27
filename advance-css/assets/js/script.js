const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle-btn");
const headerLinksContents = document.querySelector(".header-links-contents");
const dropDownContent = document.querySelectorAll(".drop-down-content");

if (header && toggleBtn && headerLinksContents) {
  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    headerLinksContents.classList.toggle("active");
  });
}

dropDownContent.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

if (header) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      header.classList.add("body-scroll");
    } else {
      header.classList.remove("body-scroll");
    }
  });
}

function getScrollbarWidth() {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px",
  );
}

window.addEventListener("resize", getScrollbarWidth);
getScrollbarWidth();

const sliders = document.querySelectorAll(".splide");

sliders.forEach((slider) => {
  const wrapper = slider.closest(".slider-wrapper");
  const prevBtn = wrapper ? wrapper.querySelector(".primary-arrow-prev") : null;
  const nextBtn = wrapper ? wrapper.querySelector(".primary-arrow-next") : null;

  let options = {
    perPage: 3,
    gap: 40,
    arrows: false,
    pagination: false,
    perMove: 1,
    breakpoints: {
      991: { perPage: 2, gap: 28 },
      575: { perPage: 1 },
    },
  };

  if (slider.classList.contains("products-slider")) {
    options = {
      perPage: 4,
      gap: 42,
      arrows: false,
      pagination: false,
      perMove: 1,
      breakpoints: {
        1279: { perPage: 3, gap: 34 },
        991: { perPage: 2, gap: 28 },
        575: { perPage: 1 },
      },
    };
  }

  const splide = new Splide(slider, options);

  if (prevBtn) prevBtn.addEventListener("click", () => splide.go("-1"));
  if (nextBtn) nextBtn.addEventListener("click", () => splide.go("+1"));

  function updateArrows() {
    if (!prevBtn || !nextBtn) return;

    if (splide.index === 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (splide.index >= splide.length - splide.options.perPage) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  splide.on("mounted move", updateArrows);
  splide.mount();
});
