const menuBtn = document.querySelector(".nav__colapsable-menu");
const menuLayout = document.querySelector(".nav__menu-layout");
const menuLinks = document.querySelectorAll(
  ".nav__menu-layout .nav__nav-list__colapsed"
);

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menuOpened");

  if (menuLayout.classList.contains("menuOpened")) {
    menuLayout.style.animationName = "fadeMenu";
    setTimeout(() => {
      menuLayout.classList.toggle("menuOpened");
      menuLayout.style.animationName = "fadeIn";
    }, 700);
  } else {
    menuLayout.classList.toggle("menuOpened");
  }
});

menuLinks.forEach((button) => {
  button.addEventListener("click", () => {
    menuLayout.style.animationName = "fadeMenu";
    menuBtn.classList.toggle("menuOpened");
    setTimeout(() => {
      menuLayout.classList.toggle("menuOpened");
    }, 500);
  });
});
