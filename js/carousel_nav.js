const slides = document.querySelectorAll(".carousel_slide");
const container = document.querySelector(".carousel_wrapper");

let scroll_n = 0;

// Scroll to a specific slide
function scroll_slide() {
  slides[scroll_n].scrollIntoView({ behavior: "smooth" });
}

// Move left/right
function scroll_left() {
  if (scroll_n > 0) {
    scroll_n -= 1;
    scroll_slide();
  }
}

function scroll_right() {
  if (scroll_n < slides.length - 1) {
    scroll_n += 1;
  } else if (scroll_n == slides.length - 1) {
    scroll_n = 0
  }
  scroll_slide();
}

// Detect which slide is visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find which slide index is visible
        const visibleIndex = Array.from(slides).indexOf(entry.target);
        if (visibleIndex !== -1) {
          scroll_n = visibleIndex; // Sync the counter
          console.log("Visible slide:", scroll_n, entry.target);
        }
      }
    });
  },
  {
    root: container,   // scrollable container
    threshold: 0.6     // 60% visible = considered “active”
  }
);

// Observe each slide
slides.forEach(slide => observer.observe(slide));
