const monthlyCard = document.querySelector(".monthly");
const yearlyCard = document.querySelector(".yearly");
const pricingList = document.querySelectorAll(".pricing-wrapper");

yearlyCard.addEventListener("click", () => {
  monthlyCard.classList.remove("active");
  yearlyCard.classList.add("active");
  pricingList.forEach((element) => {
    element.classList.add("change");
  });
});

monthlyCard.addEventListener("click", () => {
  pricingList.forEach((element) => {
    element.classList.remove("change");
  });
  yearlyCard.classList.remove("active");
  monthlyCard.classList.add("active");
});
