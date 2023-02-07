const openbtns = document.querySelectorAll('.js-open-button')
const modal = document.querySelector('.modal')
const closebtns = document.querySelectorAll('.js-close-button')

function Closemenu() {
   modal.classList.remove('open')
}

function Showmenu() {
   modal.classList.add('open')
}

for (const openbtn of openbtns) {
    openbtn.addEventListener('click', Showmenu)
}

for (const closebtn of closebtns) {
    closebtn.addEventListener('click', Closemenu)
}