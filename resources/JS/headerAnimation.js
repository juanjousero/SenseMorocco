// Definimos las variables del DOM

const skyDiv = document.getElementById('sky');
const backDesertDiv = document.getElementById('back-desert');
const frontDesertDiv = document.getElementById('front-desert');
const moroccoLetters = document.getElementById('morocco-banner');
const scrollDiv = document.getElementById('scroll-effect');

const scrollCircle = document.getElementById('scroll-circle');

// Definimos la animación que se aplica cuando se carga la web

const triggerBannerAnimation = () => {
    skyDiv.classList.add('skyAnimation');
    frontDesertDiv.classList.add('frontDesertAnimation');
    moroccoLetters.classList.add('moroccoLettersAnimation');
    scrollDiv.classList.add('scrollBoxAppearence');

    circleScroll();
}

// Definimos la animación que mueve el círculo para animar a hacer scroll

const circleScroll = () => {
    scrollCircle.classList.add('scrollCircleAnimation');
}

// Añadimos un escuchador para la carga de la web

document.addEventListener('DOMContentLoaded', triggerBannerAnimation);