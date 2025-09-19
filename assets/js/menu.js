function myFunction() {
  elem = document.getElementById("hidden_menu");
  if (elem.style.top == "0%") {
    elem.style.top = "-100%";
    // elem.style.visibility = "hidden";
  } else {
    // elem.style.visibility = "visible";
    elem.style.top = "0%";
  }
}
