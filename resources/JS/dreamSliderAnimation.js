// Declaramos las variables del DOM
const imagesArray = Array.from(document.getElementsByClassName('dream-image'));

const leftArrowDream = Array.from(document.getElementsByClassName('dream-arrow'))[0];
const rightArrowDream = Array.from(document.getElementsByClassName('dream-arrow'))[1];

// Definimos las funciones que se activan con el click
let clicks = 0;

const removeClasses = () => {
    imagesArray.forEach((element) => {
        element.classList.remove('transformFirstReverse');
        element.classList.remove('transformOriginReverse');
        element.classList.remove('transformOrigin');
        element.classList.remove('transformFirst');
    });
}

const showPreviuosImage = () => {
    console.log('Test');
    if (clicks >= 2) {
        return;
    }
    switch(clicks) {
        case 0:
            removeClasses();
            imagesArray.forEach((element) => {
                element.classList.add('transformOrigin')
            });
            clicks++;
            break;
        case 1:
            removeClasses();
            imagesArray.forEach((element) => {
                element.classList.add('transformFirst')
            });
            clicks++;
            break;
    }
}

const showNextImage = () => {
    console.log('Test2');
    if (clicks <= 0) {
        return;
    }
    switch(clicks) {
        case 1:
            removeClasses();
            imagesArray.forEach((element) => {
                element.classList.add('transformOriginReverse')
            });
            clicks--;
            break;
        case 2:
            removeClasses();
            imagesArray.forEach((element) => {
                element.classList.add('transformFirstReverse')
            });
            clicks--;
            break;
    }
}


// Añadimos escuchadores a las flechas

leftArrowDream.addEventListener('click', showNextImage);
rightArrowDream.addEventListener('click', showPreviuosImage);