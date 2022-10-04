// Definimos las variables del DOM

const sliderImages = Array.from(document.getElementsByClassName('sliderImage'));
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Definimos las funciones activadas con un click

centerIndex = 3;
zInd = 4;

const removeClassesCenterForward = () => {
    sliderImages[centerIndex].classList.remove('moveFromCenterBackwards');
    sliderImages[centerIndex].classList.remove('moveFromRightBackwards');
    sliderImages[centerIndex].classList.remove('moveFromLeftForward');
}

const removeClassesCenterBackwards = () => {
    sliderImages[centerIndex].classList.remove('moveFromCenterForward');
    sliderImages[centerIndex].classList.remove('moveFromLeftForward');
    sliderImages[centerIndex].classList.remove('moveFromRightBackwards');
}

const removeClassesLeft = () => {
    sliderImages[centerIndex - 1].classList.remove('moveFromCenterBackwards');
    sliderImages[centerIndex - 1].classList.remove('moveFromRightBackwards');
    sliderImages[centerIndex - 1].classList.remove('moveFromCenterForward');
}

const moveNextImage = () => {
    if (centerIndex == 1) {
        return;
    }
    removeClassesCenterForward();
    sliderImages[centerIndex].classList.add('moveFromCenterForward');
    sliderImages[centerIndex].style.zIndex = zInd;
    zInd++;
    removeClassesLeft();
    sliderImages[centerIndex - 1].classList.add('moveFromLeftForward');
    centerIndex--;
}

const movePreviousImage = () => {
    if (centerIndex == 5) {
        return;
    }
    removeClassesCenterBackwards();
    sliderImages[centerIndex].classList.add('moveFromCenterBackwards');
    sliderImages[centerIndex].style.zIndex = zInd;
    zInd++;
    sliderImages[centerIndex + 1].classList.add('moveFromRightBackwards');
    centerIndex++;
}


// Añadimos escuchadores a las flechas

rightArrow.addEventListener('click', moveNextImage);
leftArrow.addEventListener('click', movePreviousImage);