


// mobile menu

let icon_menu = document.getElementById('icon_menu')
let icon_menu2 = document.getElementById('icon_menu2')
let mobile_menu = document.getElementById('content-menu-mobile')


// detecting scrollY

window.addEventListener('scroll', function (){
    let nav = this.document.querySelector(('nav'))
    nav.classList.toggle('down', this.window.scrollY > 300);
})


icon_menu.addEventListener('click', () => {
    mobile_menu.style.display = 'flex'
    icon_menu.style.display = 'none'
})

icon_menu2.addEventListener('click', () => {
    mobile_menu.style.display = 'none'
    icon_menu.style.display = 'flex'
})



