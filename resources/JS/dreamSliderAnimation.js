// Declaramos las variables del DOM
const imagesArray = Array.from(document.getElementsByClassName('dream-image-div'));


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
    }

    return cityDiv;
}

const showCityCard = (event) => {
    console.log(event.target);
    let index = imagesArray.indexOf(event.target);
    const cityCard = createDiv(index);
    event.target.appendChild(cityCard);
}

const removeCityCard = (event) => {
    if (event.target.hasChildNodes()) {
        const cityCard = document.querySelector('.city-card');
        event.target.removeChild(cityCard);
    }
}


// Añadimos escuchadores a las flechas

imagesArray.forEach((image) => {
    image.addEventListener('mouseenter', showCityCard);
    image.addEventListener('mouseleave', removeCityCard);
})