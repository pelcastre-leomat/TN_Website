function useMenu() {
  const menu = document.getElementById("hidden_menu");
  menu.classList.toggle("open");
}
function hideMenu() {
  const elem = document.getElementById("hidden_menu");
  const body = document.body;
  const intIcons = document.getElementsByClassName("js-nc-int-icon");

  if (elem.classList.contains("open")) {
    elem.classList.toggle("open");

    // Toggle the icons back to their original state
    for (var i = 0; i < intIcons.length; i++) {
      const currelem = intIcons[i];
      if (currelem.classList.contains("js-nc-int-icon-loaded")) {
        currelem.classList.toggle("nc-int-icon-state-b");
      }
    }
  }
}
