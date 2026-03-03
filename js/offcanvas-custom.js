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
        $(".case-preview").removeClass("show");
        $(".overlay").removeClass("show");
        $("body").removeClass("unscrollable");
    });
});

const cursor = document.querySelector('.fake-cursor');
const interactiveElements = document.querySelectorAll('a, .btn');

// 1. 追蹤滑鼠位置
document.addEventListener('mousemove', (e) => {
    // 使用 requestAnimationFrame 優化效能，減少延遲感
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// 2. 處理 Hover 狀態
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});