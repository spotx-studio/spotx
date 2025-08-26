$(document).ready(function () {
    $(".case-box").click(function (e) { 
        e.preventDefault();
        var windowWidth = $(window).width();
        if (windowWidth < 1024) { // Example breakpoint for mobile
            $(".case-preview").toggleClass("show");
            $(".overlay").toggleClass("show");
            $("body").toggleClass("unscrollable")
        } else {

        }
    });

    $(".case-box .btn-primary").click(function (e) { 
        e.preventDefault();
        $(".case-preview").toggleClass("show");
        $(".overlay").toggleClass("show");
        $("body").toggleClass("unscrollable");
    });

    $(".close").click(function (e) { 
        e.preventDefault();
        $(".case-preview, .overlay").removeClass("show");
    });

    // Add Uneo Case Preview Content
    $(".uneo .btn-primary, .uneo").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Uneo | Pressure Map APP");
        $(".brief").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-1").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    // Add Acrox Case Preview Content
    $(".acrox .btn-primary, .acrox").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Acrox | Official Web Redesign");
        $(".detail-1").text("Acrox's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("Acrox'sLorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("Acrox's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("Acrox's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("Acrox's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    // Add Acrox Case Preview Content
    $(".churchplus .btn-primary, .churchplus").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Churchplus | Official Web Redesign");
        $(".detail-1").text("Churchplus's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("Churchplus'sLorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("Churchplus's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("Churchplus's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("Churchplus's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    // Add Guider Case Preview Content
    $(".guider .btn-primary, .guider").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Guider | Official Web Redesign");
        $(".detail-1").text("Guider's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("Guider'sLorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("Guider's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("Guider's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("Guider's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    // Add TCOC Case Preview Content
    $(".tcoc .btn-primary, .tcoc").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("TCOC | Official Web Redesign");
        $(".detail-1").text("TCOC's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("TCOC'sLorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("TCOC's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("TCOC's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("TCOC's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

});