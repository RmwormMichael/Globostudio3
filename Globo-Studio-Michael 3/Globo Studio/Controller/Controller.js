let vista = new Vista();
const mainContenido = document.getElementById("mainContenido");

window.onload = () => {
    document
    .getElementById("abrir")
    .addEventListener("click", mostrarMenu)

    document
    .getElementById("b-about")
    .addEventListener("click", mostrarAbout)
};

function mostrarMenu() {
    vista.mostrarPlantilla("menu", "mainContenido")
}

function mostrarAbout() {
    vista.mostrarPlantilla("about", "mainContenido")
}