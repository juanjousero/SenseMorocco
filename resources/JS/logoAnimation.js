// Declaramos las variables del DOM

const headerLogo = document.getElementById('logo-header');
const footerLogo = document.getElementById('logo-footer');

// Definimos la función que nos lleva al inicio de la web

const reloadPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(() => window.location.reload(), 450)
}

const reloadHeader = () => {
    window.location.reload();
}

// Le añadimos un escuchador

footerLogo.addEventListener('click', reloadPage);
headerLogo.addEventListener('click', reloadHeader);