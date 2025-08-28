$(document).ready(function () {
    $(".hamburger").click(function (e) { 
        e.preventDefault();
        $(".side-menu").addClass("show");
        $(".overlay").addClass("show");
        $("body").addClass("unscrollable")
    });

    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").removeClass("show");
        $(".case-preview").removeClass("show");
        $(".overlay").removeClass("show");
        $("body").removeClass("unscrollable");
    });
});