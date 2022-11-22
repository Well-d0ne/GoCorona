let alertBtn = document.getElementById('alert-btn')
let contact = document.getElementById('contact')
let footer = document.getElementById('footer')

alertBtn.addEventListener('click', () => {
    alert('Вы вступили в гильдию')
})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

contact.addEventListener('click', () => {
    scrollTo(footer)
})