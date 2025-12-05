const monthlyPricing = document.querySelector(".monthly");
const yearlyPricing = document.querySelector(".yearly");
const monthlyCard = document.querySelector(".monthly-card-wrapper");
const yearlyCard = document.querySelector(".yearly-card-wrapper");

yearlyPricing.addEventListener("click", () => {
  monthlyPricing.classList.remove("active");
  yearlyPricing.classList.add("active");
  monthlyCard.style.display = "none";
  yearlyCard.style.display = "grid";
});

monthlyPricing.addEventListener("click", () => {
  monthlyPricing.classList.add("active");
  yearlyPricing.classList.remove("active");
  yearlyCard.style.display = "none";
  monthlyCard.style.display = "grid";
});
