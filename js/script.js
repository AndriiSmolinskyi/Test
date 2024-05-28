const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__nav__list')
const exit = document.querySelector('.exit')

burger.addEventListener("click", (e) => {
    burger.style.display = "none"
    nav.style.display = "flex"
    exit.style.display = "inline-block"
})

exit.addEventListener("click", (e) => {
    burger.style.display = "inline-block"
    nav.style.display = "none"
    exit.style.display = "none"
})