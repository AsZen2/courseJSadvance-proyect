


// mobile menu

let icon_menu = document.getElementById('icon_menu')
let icon_menu2 = document.getElementById('icon_menu2')
let mobile_menu = document.getElementById('content-menu-mobile')

icon_menu.addEventListener('click', () => {
    mobile_menu.style.display = 'flex'
    icon_menu.style.display = 'none'
})

icon_menu2.addEventListener('click', () => {
    mobile_menu.style.display = 'none'
    icon_menu.style.display = 'flex'
})



// detecting scrollY

window.addEventListener('scroll', function (){
    let nav = document.querySelector('nav')
    let lis = document.querySelector('.li-nav')
    nav.classList.toggle('down', window.scrollY > 300);
})






// game

