const faqWrapper = document.querySelectorAll(".faq-contents-wrapper");

faqWrapper.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    const isActive = wrapper.classList.contains("active");
    faqWrapper.forEach((item) => item.classList.remove("active"));
    if (!isActive) {
      wrapper.classList.add("active");
    }
  });
});
