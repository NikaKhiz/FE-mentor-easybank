const burger = document.getElementsByClassName("header__hamburger")[0];
const overlay = document.querySelector(".overlay")
const mobileMenu = document.querySelector(".mobile__menu");
const body = document.body;
burger.addEventListener("click", function (){
    this.classList.toggle("open");
    overlay.classList.toggle("fadein")
    mobileMenu.classList.toggle("fadein");
    body.classList.toggle("noscroll")
});

