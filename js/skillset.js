$(document).ready(function () {
    $("#ux").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.ux").addClass("active");
        $(".tool-list.visuals, .tool-list.dev").removeClass("active");
    });
    $("#visuals").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.visuals").addClass("active");
        $(".tool-list.ux, .tool-list.dev").removeClass("active");
    });
    $("#dev").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.dev").addClass("active");
        $(".tool-list.visuals, .tool-list.ux").removeClass("active");
    });
});