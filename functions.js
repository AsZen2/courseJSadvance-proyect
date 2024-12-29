window.addEventListener('scroll', function (){
    let nav = this.document.querySelector(('nav'))
    nav.classList.toggle('down', this.window.scrollY > 300);

})