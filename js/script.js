// header hide & vew

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrollPosition = () => document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

// pageUp
document.addEventListener("scroll", function () {
  const pageUpButton = document.querySelector(".pageup");
  if (window.scrollY > 1500) {
    pageUpButton.classList.add("show");
    pageUpButton.classList.remove("hide");
  } else {
    pageUpButton.classList.add("hide");
    pageUpButton.classList.remove("show");
  }
});

//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
