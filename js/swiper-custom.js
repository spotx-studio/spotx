$(document).ready(function () {

    $(".show").click(function (e) { 
        e.preventDefault();
        $(".show .icon").toggleClass("active");
        $(this).siblings(".journey-details").toggleClass("active");
    });

});

    const swiper = new Swiper('.journey-section .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });