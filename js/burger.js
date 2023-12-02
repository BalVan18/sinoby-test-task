let header = document.querySelector(".header")
let menu = document.querySelector(".header__bottom")
let burger = document.querySelector(".burger")
let body = document.querySelector("body")

burger.addEventListener("click", () => {
    header.classList.toggle("header--active")
    menu.classList.toggle("header-bottom--active")
    burger.classList.toggle("burger--active")
    body.classList.toggle("hidden")
})