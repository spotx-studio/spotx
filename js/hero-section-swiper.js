document.addEventListener("DOMContentLoaded", function() {

// 1. 初始化 Swiper
    const heroSwiper = new Swiper('.hero-text-swiper', {
        speed: 600,
        spaceBetween: 40,
        effect: 'slide',
        autoHeight: true, // 自動高度
        grabCursor: false,
        
        // [關鍵修正] 加入這兩行
        observer: true,       // 監聽自身 DOM 變化
        observeParents: true, // 監聽父容器變化 (特別是 Flexbox 佈局時需要)
    });

    // 2. 導覽列點擊切換
    const navLinks = document.querySelectorAll('#hero-nav .navlink');
    const navBgDeco = document.querySelector('.nav-bg-deco');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 取得點擊的 index
            const index = parseInt(this.getAttribute('data-index'));
            
            // 叫 Swiper 滑動到該頁
            heroSwiper.slideTo(index);
        });
    });

    // 3. 監聽 Swiper 切換事件 (同步更新導覽列 active 狀態)
    heroSwiper.on('slideChange', function () {
        const activeIndex = heroSwiper.activeIndex;

        // 移除所有 active
        navLinks.forEach(link => link.classList.remove('active'));

        // 幫當前的 index 加上 active
        if(navLinks[activeIndex]) {
            navLinks[activeIndex].classList.add('active');
            
            // [選用] 如果你想讓那個綠色底線/背景圖 (nav-bg-deco) 跟著移動
            // 可以在這裡寫計算位置的邏輯
            updateNavDecoPosition(navLinks[activeIndex]);
        }
    });

    // [選用] 更新裝飾背景位置的函式
    function updateNavDecoPosition(targetLink) {
        if(!navBgDeco) return;
        
        // 簡單範例：將裝飾圖移動到 active 文字的左邊或中間
        // 實際數值需根據你的 CSS 調整
        const linkRect = targetLink.getBoundingClientRect();
        const navRect = document.querySelector('#hero-nav').getBoundingClientRect();
        
        // 計算相對位置 (這只是一個示意，可能需要根據你的 nav-bg-deco 的 CSS position 微調)
        const leftPos = linkRect.left - navRect.left;
        
        navBgDeco.style.transform = `translateX(${leftPos}px) rotate(2deg)`;
        navBgDeco.style.transition = 'transform 0.3s ease';
    }
});