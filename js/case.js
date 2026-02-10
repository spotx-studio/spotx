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
        $("body").removeClass("unscrollable");
    });

    // Add Zero One Tech Case Preview Content
    $(".zot .btn-primary, .zot").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("ZOT | Official Web Redesign");
        $(".brief").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-1").text("zot's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-2").text("zot'sLorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-3").text("zot's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-4").text("zot's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $(".detail-5").text("zot's Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        
        // Hide empty list
        $(".desc-list li").each(function() {
        let hasText = $.trim($(this).text()) !== "";
        let hasImgOnly = $(this).children().length > 0 && !hasText;
        if (!hasText && hasImgOnly) {
            $(this).addClass("d-none");
        }});
    });

    // Add Uneo Case Preview Content
    $(".uneo .btn-primary, .uneo").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("Healthcare Dashboard: Streamlining Patient Monitoring & Response");
        $(".brief").text("Lead UX/UI Designer | Collaborated with Cross-Functional Team (Backend, PM, Sales)");
        $(".detail-1").text("Empowered 1,000+ nurses with a real-time alert system, significantly reducing critical response times.");
        $(".detail-2").text("Redesigned fragmented monitoring into a centralized hub, streamlining daily clinical tasks.");
        $(".detail-3").text("Cross-browser compatible HTML/CSS/JS for seamless backend integration.");
        $(".detail-4").text("Achieved zero-revision design handoff by clarifying technical constraints early in the wireframe stage.");
        $(".detail-5").text("Created task-driven adaptive layouts tailored for both station monitoring and mobile rounds.");
        $(".cp-1").attr("src", "/media/uext/uext_og_md_1.webp");
        $(".cp-2").attr("src", "/media/uext/uext_og_md_2.webp");
        $(".cp-3").attr("src", "/media/uext/uext_og_md_3.webp");

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
        $(".brief").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
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
        $(".brief").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
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

    // Add TCOC Case Preview Content
    $(".tcoc .btn-primary, .tcoc").click(function (e) { 
        e.preventDefault();
        $(".project-name").text("TCOC | Official Web Redesign");
        $(".brief").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
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