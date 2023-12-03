let header = document.querySelector(".header")
let menu = document.querySelector(".header__bottom")
let menuLists = document.querySelector(".header-bottom-wrap")
let burger = document.querySelector(".burger")
let body = document.querySelector("body")

burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active")
    body.classList.toggle("overflow")

    if (header.classList.contains("header--active")) {
        header.classList.remove("header--active")
        header.style.overflow = "hidden"
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        header.classList.add("header--active")
        setTimeout(() => {
            header.style.overflow = "auto"
        }, 500)
    }

    if (menu.classList.contains("header-bottom--active")) {
        menu.classList.remove("header-bottom--active")
        menu.classList.add("header-bottom--hidden")
        setTimeout(() => {
            menuLists.style.display = "none"
        }, 500)
    } else {
        menu.classList.add("header-bottom--active")
        menu.classList.remove("header-bottom--hidden")
        menuLists.style.display = "block"
    }
})
