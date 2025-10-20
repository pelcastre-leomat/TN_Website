const price_container = document.querySelector(".price_wrapper");
const price_cards = price_container.querySelectorAll(".prices_card");

let price_scroll_n = 0;

// Scroll to a specific slide
function scroll_price() {
  price_cards[price_scroll_n].scrollIntoView({ behavior: "smooth" });
}

// Move left/right
function price_scroll_left() {
  console.log(price_scroll_n);
  if (price_scroll_n > 0) {
    price_scroll_n -= 1;
    scroll_price();
  }
}

function price_scroll_right() {
  if (price_scroll_n < price_cards.length - 1) {
    price_scroll_n += 1;
  } else if (price_scroll_n == price_cards.length - 1) {
    price_scroll_n = 0;
  }
  scroll_price();
}

// Detect which slide is visible
const card_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Find which slide index is visible
        const visibleIndex = Array.from(price_cards).indexOf(entry.target);
        if (visibleIndex !== -1) {
          price_scroll_n = visibleIndex; // Sync the counter
        }
      }
    });
  },
  {
    root: price_container, // scrollable container
    threshold: 0.6, // 60% visible = considered “active”
  }
);

// Observe each slide
price_cards.forEach((slide) => card_observer.observe(slide));
