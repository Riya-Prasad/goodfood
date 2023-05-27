jQuery(window).on("load", function () {
  document.body.classList.add("loaded");
});

// LOCOMOTIVE SCROLL
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  // smoothMobile: false,
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

// scroll.on("scroll", (instance) => {
//   const progress = (360 * instance.scroll.y) / instance.limit.y;
//   // console.log(progress)
// });

// nav responsive
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  // another way for nav
  // primaryNav.classList.toggle("opened");
});
