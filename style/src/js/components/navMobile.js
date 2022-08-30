document.addEventListener("DOMContentLoaded", function () {
  let close = document.querySelector(".navMobile__close");
  let burgerNav = document.querySelector(".burger__nav");
  let menu = document.querySelector(".navMobile");
  let body = document.querySelector(".page__body");

  burgerNav.addEventListener("click", function () {
    body.classList.add("no-scroll");
    menu.classList.add("navMobile_active");
  });
  close.addEventListener("click", function () {
    menu.classList.remove("navMobile_active");
    body.classList.remove("no-scroll");
  });
});
