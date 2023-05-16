const animaciones = {
    ".contenedor": 300,
    "#inventario h2": 300,
    "#inventario p": 500,
    "#inventario .boton": 700,
    "#ubicacion h2": 300,
    "#ubicacion iframe": 500,
    "#ubicacion p": 700,
    "#ubicacion .boton": 900,
    ".reco h2": 300,
    ".reco .owl-carousel": 400,
    ".footer ": 400
};

const scrollReveal = ScrollReveal();

for (const selector in animaciones) {
    if (animaciones.hasOwnProperty(selector)) {
        const delay = animaciones[selector];

        if (selector === ".reco .owl-carousel" && typeof $.fn.owlCarousel === "function") {
            // Verificar si Owl Carousel está cargado
            scrollReveal.reveal(selector, { delay });
        } else if (selector !== ".reco .owl-carousel") {
            scrollReveal.reveal(selector, { delay });
        }
    }
}
