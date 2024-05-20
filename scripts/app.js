"use strict";

const accordionButtons = document.querySelectorAll(".accordion__button");
const accordionBodies = document.querySelectorAll(".accordion__body");

accordionBodies.forEach((body) => {
  body.addEventListener("transitionend", () => {
    window.scroll(0, document.body.scrollHeight);
  });
});

accordionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    accordionBodies[index].classList.toggle("accordion__body_collapse");
  });
});

window.addEventListener("scroll", () => {
  const targetElement = document.querySelector(".program__title");
  const sideBarLogos = document.querySelectorAll(".main__sidebar-logo");
  const sideBarList = document.querySelector(".main__sidebar-list");
  const elementPosition = targetElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  sideBarLogos.forEach((logo) => {
    if (elementPosition < windowHeight) {
      logo.classList.add("main__sidebar-logo_visible");
      sideBarList.classList.add("main__sidebar-list_scrolled");
    } else {
      logo.classList.remove("main__sidebar-logo_visible");
      sideBarList.classList.remove("main__sidebar-list_scrolled");
    }
  });
});
