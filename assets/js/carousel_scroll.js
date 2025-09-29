var carousel = document.querySelector(".carousel");
var indicator = document.querySelector("#indicator");
var slides = [...document.querySelectorAll(".service_carrousel > *")];

function renderIndicator(currentIndex) {
  indicator.innerHTML = "";
  slides.forEach((_, i) => {
    var button = document.createElement("button");
    button.className = "scrollmarker";

    // button.style.left = (i + 1) * 5 + "px";
    button.innerHTML = i === currentIndex ? "●" : "○";
    indicator.appendChild(button);
  });
}

var observer = new IntersectionObserver(
  (entries) => {
    const activeEntry = entries.find((entry) => entry.isIntersecting);
    if (activeEntry) {
      const currentIndex = slides.indexOf(activeEntry.target);
      renderIndicator(currentIndex);
    }
  },
  {
    root: carousel,
    threshold: 0.5,
  }
);

slides.forEach((element) => observer.observe(element));
