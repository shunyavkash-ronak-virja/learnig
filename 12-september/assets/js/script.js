// Navbar link js ---------------
const links = document.querySelectorAll(".nav-links .link");
links.forEach((link) => {
  link.addEventListener("click", function () {
    // remove active from all
    links.forEach((l) => l.classList.remove("active"));
    // add active to clicked link
    this.classList.add("active");
  });
});

// Navbar toggle js ---------------
const navbarToggle = document.querySelector(".nav-toggle");
const navbarMenu = document.querySelector(".nav-links-wrapper");
navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Splide js ---------------
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: "true",
    pauseOnHover: "true",
    width: "70%",
    drag: false,
    breakpoints: {
      768: {
        width: "100%",
      },
    },
  });
  splide.mount();
});

// Pricing card ---------------
document.addEventListener("DOMContentLoaded", function () {
  const monthlyBtn = document.querySelector(".monthly-filter-btn");
  const annualBtn = document.querySelector(".discount-filter-btn");
  const regularPrices = document.querySelectorAll(
    ".pricing-card-regular-price"
  );
  const discountPrices = document.querySelectorAll(
    ".pricing-card-discount-price"
  );

  // Monthly button click
  monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    annualBtn.classList.remove("active");
    regularPrices.forEach((price) => (price.style.display = "block"));
    discountPrices.forEach((price) => (price.style.display = "none"));
  });

  // Annual button click
  annualBtn.addEventListener("click", () => {
    annualBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    regularPrices.forEach((price) => (price.style.display = "none"));
    discountPrices.forEach((price) => (price.style.display = "block"));
  });
});

// FAQ section ---------------
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    // Close other open items
    document.querySelectorAll(".faq-content-wrapper").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
    // Toggle current item
    faqItem.classList.toggle("active");
  });
});

// Click to top button ---------------
let mybutton = document.querySelector(".click-to-top-btn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
