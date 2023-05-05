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
    ".reco .owl-carousel": 500,
    ".footer ": 400
};

for (const selector in animaciones) {
    if (Object.hasOwnProperty.call(animaciones, selector)) {
        const delay = animaciones[selector];
        ScrollReveal().reveal(selector, { delay });
    }
}
