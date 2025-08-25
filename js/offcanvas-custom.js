$(document).ready(function () {
    $(".hamburger").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("show");
        $(".overlay").toggleClass("show");
        $("body").toggleClass("unscrollable")
    });

    $(".case-box").click(function (e) { 
        e.preventDefault();
        $(".case-preview").toggleClass("show");
        $(".overlay").toggleClass("show");
        $("body").toggleClass("unscrollable")
    });

    $(".uneo").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Uneo | Pressure Map APP");    
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").removeClass("show");
        $(".case-preview").removeClass("show");
        $(".overlay").removeClass("show");
        $("body").removeClass("unscrollable");
    });
});