// Sidebar js -------
const toggleBtn = document.querySelector(".btn");
const sideBar = document.querySelector(".sidebar-container");
const closeBtn = document.querySelector(".sidebar-close-btn");
const bgOverlay = document.querySelector(".bg-overlay");
const bodyHidden = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  bgOverlay.classList.add("active");
  bodyHidden.classList.add("body-hidden");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  bgOverlay.classList.remove("active");
  bodyHidden.classList.remove("body-hidden");
});

bgOverlay.addEventListener("click", () => {
  sideBar.classList.remove("active");
  bgOverlay.classList.remove("active");
  bodyHidden.classList.remove("body-hidden");
});

// Modal js -------
const modalBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const contactForm = document.querySelector(".contact-form");
const modalBox = document.querySelector(".modal-wrapper");
const bikeValue = document.querySelector(".bike-value");
const firstForm = document.querySelector(".first-form-wrapper");
const secondForm = document.querySelector(".second-form-wrapper");
const bodyHide = document.querySelector("body");

modalBtn.addEventListener("click", () => {
  modalBox.style.display = "flex";
  bodyHide.classList.add("body-hidden");
});

modalClose.addEventListener("click", () => {
  modalBox.style.display = "none";
  bodyHide.classList.remove("body-hidden");
});

modalOverlay.addEventListener("click", () => {
  modalBox.style.display = "none";
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
