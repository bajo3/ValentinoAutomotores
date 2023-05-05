$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000, // Tiempo entre cada movimiento en ms
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<button class='owl-prev'>Anterior</button>",
            "<button class='owl-next'>Siguiente</button>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
        
        }
    });
});
