jQuery(window).on("load", function () {
  document.body.classList.add("loaded");
});

// LOCOMOTIVE SCROLL
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  getDirection: true,
  getSpeed: true,
  inertia: 1,
});

// Scroll update all pages
document.addEventListener("DOMContentLoaded", function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      scroll.update();
    }, 400);
  }
  ScrollUpdateDelay();
});

