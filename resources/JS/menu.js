// Obtenemos el botón del menú del DOM

const main = document.getElementById('main');
const menuButton = document.getElementById('hamburger-header');
const menuLine01 = document.querySelector('.line01');
const menuLine02 = document.querySelector('.line02');
const menuLine03 = document.querySelector('.line03');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const menuDiv = document.getElementById('menu-container');

// Definimos las funciones para que quede más modular el archivo

const removeClass = (variable, className) => {
    variable.classList.remove(className);
}

const addClass = (variable, className) => {
    variable.classList.add(className);
}

// Definimos la función que crea el menú
let isMenuVisible = false;
const menuAppearence = () => {
    if (!isMenuVisible) {
        removeClass(menuDiv, 'menu-disappearing');
        removeClass(main, 'page-appearing');
        addClass(menuDiv, 'menu-appearing');
        addClass(main, 'page-disappearing');

        removeClass(menuLine02, 'line02-original');
        removeClass(menuLine01, 'line01-original');
        addClass(menuLine03, 'line03-modified');
        addClass(menuLine02, 'line02-modified');
        addClass(menuLine01, 'line01-modified');

        setTimeout(() => {
            document.body.removeChild(main);
            document.body.removeChild(footer);
        }, 1000);
        
        isMenuVisible = true;
    } else {
        removeClass(menuDiv, 'menu-appearing');
        removeClass(main, 'page-disappearing');
        addClass(menuDiv, 'menu-disappearing');
        addClass(main, 'page-appearing');

        removeClass(menuLine03, 'line03-modified');
        removeClass(menuLine02, 'line02-modified');
        removeClass(menuLine01, 'line01-modified');
        addClass(menuLine02, 'line02-original');
        addClass(menuLine01, 'line01-original');
        
        document.body.appendChild(main);
        document.body.appendChild(footer);

        isMenuVisible = false;
    }
}

// Añadimos un escuchador de click al menu que activará la función

menuButton.addEventListener('click', menuAppearence);