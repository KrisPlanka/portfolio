$( document ).ready(function() {
    console.log( "ready!" );

    $('.certificates').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});


