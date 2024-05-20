"use strict";

const accordionButtons = document.querySelectorAll(".accordion__button");
const accordionBodies = document.querySelectorAll(".accordion__body");

accordionBodies.forEach((body) => {
  body.addEventListener("transitionend", () => {
    window.scroll(0, document.body.scrollHeight - body.scrollHeight * 0.5);
  });
});

accordionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    accordionBodies[index].classList.toggle("accordion__body_collapse");
  });
});

window.addEventListener("scroll", () => {
  const sideBarLogos = document.querySelectorAll(".main__sidebar-logo");
  const sideBarList = document.querySelector(".main__sidebar-list");

  const targetElement = document.querySelector(".program__title");
  const elementPosition = targetElement.getBoundingClientRect().top;
  console.log(elementPosition);
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

const dropdownButton = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", () => {
  dropdownContent.classList.toggle("dropdown__content_open");
});

const burgerMenu = document.querySelector(".burger");

document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".dropdown__button")) {
    dropdownContent.classList.remove("dropdown__content_open");
  }

  if (e.target.matches(".burger__button")) {
    burgerMenu.classList.toggle("burger_open");
    document.body.classList.toggle("body__backdrop_active");
  }

  if (
    !e.target.matches(".burger__button") &&
    !e.target.matches(".burger__menu")
  ) {
    burgerMenu.classList.remove("burger_open");
    document.body.classList.remove("body__backdrop_active");
  }
});
