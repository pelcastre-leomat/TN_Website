const serviceCarrousel = document.querySelector(".carrousel_wrapper");
var slides = Array.from(document.querySelectorAll(".services_card"));
const gap = 20;

function setInitialWidths() {
  const initialWidth =
    (serviceCarrousel.clientWidth - slides.length * gap) / slides.length;

  slides.forEach((slide) => {
    slide.style.width = initialWidth + "px";
    slide.style.transition = "width 0.2s ease-in-out";
  });
}

setInitialWidths();

// Update sizes on resize
window.addEventListener("resize", setInitialWidths);

slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    const expandedWidth = Math.min(300, serviceCarrousel.clientWidth * 0.5);
    const remainingWidth =
      serviceCarrousel.clientWidth - expandedWidth - (slides.length - 1) * gap;
    const newWidth = remainingWidth / (slides.length - 1);

    slides.forEach((otherSlide) => {
      otherSlide.style.width =
        otherSlide === slide ? expandedWidth + "px" : newWidth + "px";
    });
  });

  slide.addEventListener("mouseleave", setInitialWidths);
});

function setEqualHeights() {
  let maxHeight = 0;

  slides.forEach((slide) => {
    slide.style.height = "auto"; // reset first
    maxHeight = Math.max(maxHeight, slide.offsetHeight);
  });

  slides.forEach((slide) => {
    slide.style.height = maxHeight + "px";
  });
}

// Run once initially and also on resize
setEqualHeights();
window.addEventListener("resize", setEqualHeights);
