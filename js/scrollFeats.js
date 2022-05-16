// Creating animated scroll feat for home button

const initialDisplayPoint = document.querySelector("#about-section").offsetTop;
const anchor = document.querySelector(".home-anchor");

function animateScroll() {
  const windowTop = window.pageYOffset;
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth > 600) {
    if (windowTop > initialDisplayPoint) {
      anchor.style.animationName = "anchorDown";
      anchor.style.display = "flex";
    } else {
      anchor.style.animationName = "fadeOut";
      anchor.addEventListener("animationend", (e) => {
        if (e.animationName === "fadeOut") anchor.style.display = "none";
      });
    }
  } else {
    anchor.style.display = "none";
  }
}

window.addEventListener("scroll", animateScroll);
