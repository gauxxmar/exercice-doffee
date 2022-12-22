var burger = document.querySelector(".burger");
var burgerBackground = document.querySelector(".burger-background");

var open = function () {
  burgerBackground.classList.toggle("is-open");
};

burger.addEventListener("click", open);
