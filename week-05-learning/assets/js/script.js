const toggleBtn = document.querySelector(".sidebar-btn");
const sideBar = document.querySelector(".sidebar-container");
const closeBtn = document.querySelector(".sidebar-close-btn");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
