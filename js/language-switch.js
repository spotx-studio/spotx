document.addEventListener("DOMContentLoaded", function() {
    
    const langBtnText = document.getElementById('current-lang-text');
    const btnEn = document.getElementById('lang-en');
    const btnZh = document.getElementById('lang-zh');

    // 1. 取得當前路徑
    // 例如: "/case/uext/" (英文) 或 "/zh/case/uext/" (中文)
    const currentPath = window.location.pathname;

    // 2. 判斷是否為中文版
    const isChinese = currentPath.includes('/zh/');

    if (isChinese) {
        // === 目前是中文版 === (/zh/case/uext/)
        
        if(langBtnText) langBtnText.textContent = "繁中";
        
        // 邏輯：把路徑開頭的 "/zh/" 移除，變回英文版路徑
        // "/zh/case/uext/" -> "/case/uext/"
        const targetEnPath = currentPath.replace('/zh/', '/');
        
        btnEn.href = targetEnPath;
        
        // 設定當前狀態
        btnZh.href = "#";
        btnZh.classList.add('active');

    } else {
        // === 目前是英文版 === (/case/uext/)
        
        if(langBtnText) langBtnText.textContent = "EN";
        
        // 邏輯：在路徑的最前面加上 "/zh"
        // "/case/uext/" -> "/zh/case/uext/"
        // "/" -> "/zh/"
        
        // 這裡做一個簡單的防呆，避免重複斜線 (//zh)
        const targetZhPath = '/zh' + currentPath.replace(/\/$/, ""); // 移除尾部斜線以防萬一，通常瀏覽器會自動處理 /zh//
        
        // 最穩定的寫法：直接加在前面，瀏覽器能處理 /zh//case... 但為了美觀我們用正規的
        btnZh.href = '/zh' + currentPath;
    }
});