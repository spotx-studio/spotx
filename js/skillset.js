$(document).ready(function () {
    $("#ux").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.ux").addClass("active");
        $(".tool-list.visuals, .tool-list.coding").removeClass("active");
    });
    $("#visuals").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.visuals").addClass("active");
        $(".tool-list.ux, .tool-list.coding").removeClass("active");
    });
    $("#coding").click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".tool-list.coding").addClass("active");
        $(".tool-list.visuals, .tool-list.ux").removeClass("active");
    });
});