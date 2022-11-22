// Obtenemos el botón del menú del DOM
const main = document.getElementById('main');
const menuButton = document.getElementById('hamburger-header');
const menuLine01 = document.querySelector('.line01');
const menuLine02 = document.querySelector('.line02');
const menuLine03 = document.querySelector('.line03');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const menuDiv = document.getElementById('menu-container');
const menuImagesArray = Array.from(document.getElementsByClassName('menu-image'));
// const dreamCitiesItem = document.querySelector('.list-dream-cities');
// const magicRegionsItem = document.querySelector('.list-magic-regions');
// const fabulousFoodItem = document.querySelector('.list-fabulous-food');
const listItemsArray = document.querySelectorAll('.list-items');

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

// Configuramos que se haga hover para mostrar las imágenes
const imagesDisappearence = (event) => {
    menuImagesArray.forEach((image) => {
        image.classList.remove('fade-in-images');
    })
}

const imagesAppearence = (event) => {
    console.log(event.target);
    if (event.target == listItemsArray[0]) {
        menuImagesArray[0].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu01.png")'; // Imagen de la izquierda
        menuImagesArray[1].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu03.png")'; // Imagen de la derecha
        menuImagesArray[2].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu02.png")'; // Imagen del centro
    } else if (event.target == listItemsArray[1]) {
        menuImagesArray[0].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu02.png")';
        menuImagesArray[1].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu01.png")';
        menuImagesArray[2].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu03.png")';
    } else if (event.target == listItemsArray[2]) {
        menuImagesArray[0].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu03.png")';
        menuImagesArray[1].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu02.png")';
        menuImagesArray[2].style.backgroundImage = 'url("./resources/Images/menuImages/foto-menu01.png")';
    }
    menuImagesArray.forEach((image) => {
        image.classList.add('fade-in-images');
    })
}

// Añadimos un escuchador a cada item de la lista para que podamos descubrir las imágenes
listItemsArray.forEach((item) => {
    item.addEventListener('mouseenter', imagesAppearence);
    item.addEventListener('mouseleave', imagesDisappearence);
})