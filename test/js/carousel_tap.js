document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel_slide");

  slides.forEach((slide) => {
    slide.addEventListener("click", (event) => {
      const isAlreadyTapped = event.currentTarget.classList.contains("tapped");

      slides.forEach((s) => s.classList.remove("tapped"));

      if (!isAlreadyTapped) {
        event.currentTarget.classList.add("tapped");
      }
    });
  });
});
