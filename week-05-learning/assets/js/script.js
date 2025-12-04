// Sidebar js -------
const toggleBtn = document.querySelector(".btn");
const sideBar = document.querySelector(".sidebar-container");
const closeBtn = document.querySelector(".sidebar-close-btn");
const bgOverlay = document.querySelector(".bg-overlay");
const bodyHidden = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  bgOverlay.style.display = "block";
  bodyHidden.classList.add("body-hidden");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  bgOverlay.style.display = "none";
  bodyHidden.classList.remove("body-hidden");
});

bgOverlay.addEventListener("click", () => {
  sideBar.classList.remove("active");
  bgOverlay.style.display = "none";
  bodyHidden.classList.remove("body-hidden");
});

// Modal js -------
const modalBtn = document.querySelector(".modal-btn");
const modalWrapper = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const contactForm = document.querySelector(".contact-form");
const bikeValue = document.querySelector(".bike-value");
const firstForm = document.querySelector(".first-form");
const secondForm = document.querySelector(".second-form");
const bodyHide = document.querySelector("body");

modalBtn.addEventListener("click", () => {
  modalWrapper.style.display = "block";
  modalOverlay.style.display = "block";
  bodyHide.classList.add("body-hidden");
});

modalClose.addEventListener("click", () => {
  modalWrapper.style.display = "none";
  modalOverlay.style.display = "none";
  bodyHide.classList.remove("body-hidden");
});

modalOverlay.addEventListener("click", () => {
  modalWrapper.style.display = "none";
  modalOverlay.style.display = "none";
  bodyHide.classList.remove("body-hidden");
});

contactForm.addEventListener("click", () => {
  firstForm.style.display = "block";
  secondForm.style.display = "none";
});

bikeValue.addEventListener("click", () => {
  secondForm.style.display = "block";
  firstForm.style.display = "none";
});
