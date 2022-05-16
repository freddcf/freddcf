// Body tag
const body = document.querySelector("body");
// Preloader elements
const preloaderEl = document.querySelector("#preloader");
const SVGpreloaderEl = document.querySelector(".svg-preloader");
// Page elements
const navEl = document.querySelector("nav");
const socialMediasEl = document.querySelector(".social-medias-display");
const bannerArtEl = document.querySelector(".banner-art");
const text1El = document.querySelector(".text-1");
const animatedCompassEl = document.querySelector(".animated-compass");

// TESTING AREA TOOLS

animateOn();

function animateOn() {
  preloaderEl.style.display = "none";
  body.style.overflowY = "scroll";
}

// loadPageAnimations();

//////////////////////

SVGpreloaderEl.addEventListener("animationend", (e) => {
  if (e.animationName === "animateLogo") {
    SVGpreloaderEl.style.animationDelay = ".5s";
    SVGpreloaderEl.style.animationName = "fadeScreen";

    // Timed fading animation
    setTimeout(() => {
      preloaderEl.style.animationName = "fadeScreen";

      // LOAD PAGE ANIMATIONS
      loadPageAnimations();
    }, 1500);
  }
});

preloaderEl.addEventListener("animationend", (e) => {
  if (e.animationName === "fadeScreen") {
    body.style.overflowY = "scroll";
    preloaderEl.style.display = "none";
  }
});

function loadPageAnimations() {
  navEl.classList.add("navAnime");
  socialMediasEl.classList.add("social-medias-displayAnime");
  bannerArtEl.classList.add("banner-artAnime");
  text1El.classList.add("text-1Anime");
  animatedCompassEl.classList.add("animated-compassAnime");
}
