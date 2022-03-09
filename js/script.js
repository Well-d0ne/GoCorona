let burger = document.getElementById("burger")
let menu = document.getElementById("menu")
let back = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('open')
    back.classList.toggle('lock');
})