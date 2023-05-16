$(function() {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop:true,
        autoPlay:true,
        nav:false,
        rewindNav:false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: { items: 1 },
            600: { items: 3 }
        }
    });
});
