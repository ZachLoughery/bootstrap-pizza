let nav = document.querySelector(".navbar");
let menu = document.getElementById("menu");
let navSticky = nav.offsetTop;

function stickyNav() {
  if (window.scrollY >= navSticky) {
    menu.classList.add("nav-padding");
  } else {
    menu.classList.remove("nav-padding");
  }
}

window.addEventListener("scroll", stickyNav);
