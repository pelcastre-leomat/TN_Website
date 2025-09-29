function useMenu() {
  elem = document.getElementById("hidden_menu");
  if (elem.style.top == "0%") {
    elem.style.top = "-100%";
  } else {
    elem.style.top = "0%";
  }
}

function hideMenu() {
  elem = document.getElementById("hidden_menu");
  elem.style.top = "-100%";
  var intIcons = document.getElementsByClassName("js-nc-int-icon");
  for (var i = 0; intIcons.length > i; i++) {
    currelem = intIcons[i];
    if (currelem.classList.contains("js-nc-int-icon-loaded")) {
      currelem.classList.toggle("nc-int-icon-state-b");
    }
  }
}
