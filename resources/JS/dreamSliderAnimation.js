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

// Añadimos scroll con un drag y movilidad con este drag a la barra de progreso

const dragContainer = document.getElementById('dream-images-slide');
// const progressBar = document.getElementById('progress-bar-inner');
let initialPosition;

const scrollingDiv = (event) => {
    const dx = event.clientX - initialPosition;
    dragContainer.scrollLeft = (dragContainer.scrollLeft - dx);
    // if (-dx / 10 >= 0) {
    //     progressBar.style.marginLeft = -(dx / 9.5) + 'px';
    // }
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

// Añadimos que la barra de progreso se mueva según se vean unas imágenes u otras

const progressBar = document.getElementById('progress-bar-inner');
const barNumber = document.getElementById('bar-number');
const image01 = imagesArray[0];
const image04 = imagesArray[3];
const image05 = imagesArray[4];

let observerImage01 = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        progressBar.style.marginLeft = '0px';
        barNumber.innerHTML = '03';
    }
}, {threshold: 1.0})

let observerImage04 = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        progressBar.style.marginLeft = '85px';
        barNumber.innerHTML = '04';
    }
}, {threshold: 1.0})

let observerImage05 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        progressBar.style.marginLeft = '163px';
        barNumber.innerHTML = '05';
    }
}, {threshold: 1.0});

observerImage01.observe(image01);
observerImage04.observe(image04);
observerImage05.observe(image05);