// Nav toggle - - - - - - - - - -
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links-block");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Slider section - - - - - - - - - -

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    // autoplay: true,
    perPage: 1,
    arrows: false,
    focus: "center",
    breakpoints: {
      767: {
        width: "100%",
      },
    },
  });
  splide.mount();
});

// Faq section - - - - - - - - - -
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    // Close other open items
    document.querySelectorAll(".faq-content").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
    // Toggle current item
    faqItem.classList.toggle("active");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".privacy-section-label-title");

//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       if (targetSection) {
//         targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

//         document
//           .querySelectorAll(".privacy-section-label-title")
//           .forEach((anchor) => {
//             anchor.classList.remove("active-link");
//           });

//         this.classList.add("active-link");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".privacy-section-label-title");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Remove active class from all
      links.forEach((anchor) => anchor.classList.remove("active-link"));

      // Add active class to clicked link
      this.classList.add("active-link");
    });
  });
});
