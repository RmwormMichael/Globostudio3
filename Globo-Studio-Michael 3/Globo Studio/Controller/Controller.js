let vista = null;
const mainContenido = document.getElementById("mainContenido");

window.onload = () => {
    vista = new Vista();
    mostrarMainContenido()
    /*document
    .getElementById("abrir")
    .addEventListener("click", mostrarMenu)
    document
    .getElementById("b-about")
    .addEventListener("click", mostrarAbout)
*/
};

function mostrarMenu() {
    vista.mostrarPlantilla("menu", "mainContenido")
}

function mostrarMainContenido() {
    vista.mostrarPlantilla("inicio", "mainContenido")
}

function mostrarAbout() {
    vista.mostrarPlantilla("about", "mainContenido")
}

function mostrarServices() {
    vista.mostrarPlantilla("our-services", "mainContenido")
}

function mostrarGallery() {
    vista.mostrarPlantilla("galery", "mainContenido")
}

function mostrarQuotePrice() {
    vista.mostrarPlantilla("quote-price", "mainContenido")
}

function mostrarLogin() {
    vista.mostrarPlantilla("login", "mainContenido")
}

function mostrarRecovery() {
    vista.mostrarPlantilla("recovery", "mainContenido")
}

function mostrarRegister() {
    vista.mostrarPlantilla("register", "mainContenido")
}
