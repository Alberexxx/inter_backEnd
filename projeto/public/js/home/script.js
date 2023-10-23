//MobileMenu
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

//ScrollMenuBar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-140px";
    }
    prevScrollpos = currentScrollPos;
}

//LightModel
const mode = document.getElementById('mode_icon');

// Verificar o localStorage para saber a preferência do usuário
const preferredTheme = localStorage.getItem('theme');

// Definir o tema com base na preferência armazenada no localStorage ou um tema padrão
if (preferredTheme === 'dark') {
    document.body.classList.add('dark');
    mode.classList.remove('bx-sun');
    mode.classList.add('bx-moon');
} else {
    document.body.classList.remove('dark');
    mode.classList.remove('bx-moon');
    mode.classList.add('bx-sun');
}

// Adicionar o evento de clique no botão para alternar o tema
mode.addEventListener('click', () => {
    const form = document.getElementById('icon');

    if (mode.classList.contains('bx-sun')) {
        mode.classList.remove('bx-sun');
        mode.classList.add('bx-moon');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Armazenar a preferência do usuário no localStorage
        return;
    }

    mode.classList.remove('bx-moon');
    mode.classList.add('bx-sun');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Armazenar a preferência do usuário no localStorage
});




