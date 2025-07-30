$(document).ready(function () {
    $(".hamburger").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("show");
        $(".overlay").toggleClass("show");
        $("body").toggleClass("unscrollable")
    });

    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").removeClass("show");
        $(".overlay").removeClass("show");
        $("body").removeClass("unscrollable");
    });
});