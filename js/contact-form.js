"use strict";

const contactForm = document.querySelector(".contact-form");
const overlayForm = document.querySelector(".overlayForm");
const btnCloseModalForm = document.querySelector(".close-modalForm");
const btnOpenModalForm = document.querySelector(".contact");

function closeModalForm() {
  contactForm.classList.add("hidden");
  overlayForm.classList.add("hidden");
}

function openModalForm() {
  contactForm.classList.remove("hidden");
  overlayForm.classList.remove("hidden");
}

btnOpenModalForm.addEventListener("click", openModalForm);

btnCloseModalForm.addEventListener("click", closeModalForm);

overlayForm.addEventListener("click", closeModalForm);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactForm.classList.contains("hidden"))
    closeModalForm();
});

function copyText() {
  const copyTextEl = document.querySelector(".link-portfolio");
  const url_page = window.location.href;
  navigator.clipboard.writeText(url_page);
  copyTextEl.classList.add("shake-btn");
  setTimeout(() => {
    copyTextEl.classList.remove("shake-btn");
  }, 500);
}
