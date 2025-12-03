const toggleBtn = document.querySelector(".sidebar-btn");
const closeBtn = document.querySelector(".sidebar-close-btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("active");
  closeBtn.classList.remove("active");
});
