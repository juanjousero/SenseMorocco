// Declaramos las variables del DOM

const imagesArrayContainer = Array.from(document.getElementsByClassName('dream-image-div'));
const imagesArray = Array.from(document.getElementsByClassName('dream-image'));


// Definimos las funciones que se activan con el click

const createDiv = (index) => {
    const cityDiv = document.createElement('div');
    const cityParagraph = document.createElement('p');
    const cityArrow = document.createElement('img');

    cityDiv.appendChild(cityParagraph);
    cityDiv.appendChild(cityArrow);
    cityDiv.classList.add('city-card');
    cityParagraph.classList.add('city-name');
    cityArrow.src = './resources/Images/dreamSlider/Arrow1.svg';
    cityArrow.classList.add('city-arrow');

    switch (index) {
        case 0:
            cityParagraph.innerHTML = 'Marraketch';
            break;
        case 1:
            cityParagraph.innerHTML = 'Chaouen';
            break;
        case 2:
            cityParagraph.innerHTML = 'Casablanca';
            break;
        case 3:
            cityParagraph.innerHTML = 'Ouarzazate';
            break;
        case 4:
            cityParagraph.innerHTML = 'Lorem Ipsum';
            break;
    }

    return cityDiv;
}

const showCityCard = (event) => {
    let index = imagesArrayContainer.indexOf(event.target);
    const cityCard = createDiv(index);
    event.target.appendChild(cityCard);
    imagesArray[index].style.backgroundSize = '100% 120%';
    imagesArray[index].style.borderBottomLeftRadius = '0';
    imagesArray[index].style.borderBottomRightRadius = '0';
}

const removeCityCard = (event) => {
    if (event.target.hasChildNodes()) {
        const cityCard = document.querySelector('.city-card');
        event.target.removeChild(cityCard);
    }
    let index = imagesArrayContainer.indexOf(event.target);
    imagesArray[index].style.backgroundSize = '100% 100%';
    imagesArray[index].style.borderBottomLeftRadius = '20px';
    imagesArray[index].style.borderBottomRightRadius = '20px';
}


// Añadimos escuchadores a las flechas

imagesArrayContainer.forEach((image) => {
    image.addEventListener('mouseenter', showCityCard);
    image.addEventListener('mouseleave', removeCityCard);
})

// Añadimos scroll con un drag

// const dragBox = document.getElementById('drag');
const dragContainer = document.getElementById('dream-images-slide');
let initialPosition;

const scrollingDiv = (event) => {
    const dx = event.clientX - initialPosition;
    dragContainer.scrollLeft = (dragContainer.scrollLeft - dx);
}

const cancelFunction = () => {
  dragContainer.removeEventListener('mousemove', scrollingDiv);
  dragContainer.style.cursor = "grab";
}

const mouseDownFunction = (event) => {
  initialPosition = event.clientX;
  dragContainer.style.cursor = "grabbing";
  
  dragContainer.addEventListener('mousemove', scrollingDiv);
  dragContainer.addEventListener('mouseup', cancelFunction);
}

dragContainer.addEventListener('mousedown', mouseDownFunction);

// Añadimos que las imágenes sean clicables

const clickOnImage = (event) => {
    // console.log(event.target);
}

imagesArray.forEach((image) => image.addEventListener('click', clickOnImage));