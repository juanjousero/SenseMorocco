// Declaramos las variables del DOM

const headerLogo = document.getElementById('logo-header');
const footerLogo = document.getElementById('logo-footer');

// Definimos la función que nos lleva al inicio de la web

/*const scrolltoTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}*/

const reloadPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(() => window.location.reload(), 450)
    //window.location.reload();
}

const reloadHeader = () => {
    window.location.reload();
}

// Le añadimos un escuchador

//footerLogo.addEventListener('click', scrolltoTop);
footerLogo.addEventListener('click', reloadPage);
headerLogo.addEventListener('click', reloadHeader);