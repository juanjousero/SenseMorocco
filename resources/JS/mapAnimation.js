// Definimos las variables del DOM

const mapArray = Array.from(document.getElementsByClassName('map'));
const cityImage = document.getElementById('country-image');
const cityName = document.getElementById('country-h3');
const citySubheading = document.getElementById('country-h4');
const cityText = document.getElementById('country-p');

// Definimos los array para los textos y URLs

const url = './resources/Images/countryMap/';
const imagesMapArray = ['Guelmim.jpg', 'elAaiun.jpg', 'Marraketch.png', 'Safi.jpg', 'Oujda.jpg', 'Ouarzazate.png', 'Meknes.jpg', 'Dakhla.jpg', 'alHoceima.jpg', 'beniMellal.jpg', 'Tanger.jpg', 'Settat.jpg', 'Fes.jpg', 'Kenitra.jpg', 'casablanca.jpg', 'Rabat.jpg'];
const citiesArray = ['Guelmim', 'El Aaiún', 'Marrakech', 'Safi', 'Oujda', 'Ouarzazate', 'Meknès', 'Dakhla', 'Al Hoceima', 'Beni Mellal', 'Tanger', 'Settat', 'Fès', 'Kenitra', 'Casablanca', 'Rabat'];
const subheadingsArray = ['Guelmim, historia y arqueología', 'El Aaiún, la región de las arenas', 'Marrakech con los cinco sentidos',
'Safi, tierra de alfareros', 'Oujda, el esplendor del Mediterráneo', 'Ouarzazate, trasladarse a otro milenio', 'Meknès, ciudad imperial',
'Dakhla, juega a las arenas Robinsons', 'Al Hoceima, destino de ensueño', 'Beni Melal, cruce de historia', 'Tanger, referente Fenicio',
'Settat, el granero de Marruecos', 'Fès con la medina más grande', 'Kenitra con su puerto pesquero', 'Casablanca, la energía de la modernidad',
'Rabat, capital Marroquí'];
const textArray = ['Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.',
'Lorem Ipsum dolor sit amet, consectetur adpiscing elit. Lorem ut arcu pretium maecenas id enim. Interdum commodo diam massa nec nisi suscipit ultrices orci, scelerisque. Blandit lorem sollicitudin cras elementum convallis feugiat sapien.']

// Definimos la función que modifica la imagen y el texto según 
// la ciudad clicada

let noClick = true;

if (noClick) {
    mapArray[2].classList.add('clickedMap');
}

const changeImage = (selectionClass) => {
    cityImage.classList.remove('mapImageAnimation');
    let numString = '';
    for (let i = 3; i < selectionClass.length; i++) {
        numString = numString + selectionClass[i];
    }
    let num = Number(numString) - 1;
    cityImage.src = `${url}${imagesMapArray[num]}`;
    cityImage.style.opacity = '0';
    setTimeout(() => cityImage.classList.add('mapImageAnimation'), 10);

    return num;
}

const changeText = (num) => {
    cityName.innerHTML = citiesArray[num];
    citySubheading.innerHTML = subheadingsArray[num];
    cityText.innerHTML = textArray[num];
}

const showCity = (event) => {
    let selectionClass = event.target.classList[1];
    let number = changeImage(selectionClass);
    changeText(number);
    mapArray.forEach((item) => {
        item.classList.remove('clickedMap');
    })
    event.target.classList.add('clickedMap');
}

const hoveringCities = (event) => {
    event.target.classList.add('hoveringMap');
}

const removeHovering = () => {
    mapArray.forEach((item) => {
        item.classList.remove('hoveringMap');
    })
}

// Añadimos escuchadores a cada ciudad

mapArray.forEach((city) => {
    city.addEventListener('click', showCity);
    city.addEventListener('mouseenter', hoveringCities);
    city.addEventListener('mouseleave', removeHovering);
})