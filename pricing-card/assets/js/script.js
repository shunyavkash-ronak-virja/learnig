const monthlyPricing = document.querySelector(".monthly");
const yearlyPricing = document.querySelector(".yearly");

yearlyPricing.addEventListener("click", () => {
  monthlyPricing.classList.remove("active");
  yearlyPricing.classList.add("active");
});

monthlyPricing.addEventListener("click", () => {
  monthlyPricing.classList.add("active");
  yearlyPricing.classList.remove("active");
});
