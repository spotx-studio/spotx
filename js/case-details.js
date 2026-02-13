document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. GLOBAL CONFIGURATION
       ========================================= */
    const sections = [
        document.querySelector('.ps'),    // 0. Problem Statement
        document.querySelector('.gnms'),  // 1. Metrics
        document.querySelector('.uxs'),   // 2. UX Planning
        document.querySelector('.dss'),   // 3. Styles
        document.querySelector('.its'),   // 4. Iterations
        document.querySelector('.dsys'),  // 5. Design System
        document.querySelector('.outcs')  // 6. Outcomes
    ];

    // --- Mobile Controller Elements (New Selectors) ---
    const smContainer = document.querySelector('.page-controller-sm');
    const smIndicators = document.querySelectorAll('.page-controller-sm .indicator');
    
    // 新增：進度條相關元素
    const smCurrentIndexEl = document.querySelector('.page-controller-sm .current');
    const smTotalIndexEl = document.querySelector('.page-controller-sm .total');
    const smProgressBar = document.querySelector('.page-controller-sm .progress-bar');
    const smProgressText = document.querySelector('.page-controller-sm .progress-percentage');

    // 初始化：設定總頁數 (自動計算 sections 長度)
    if(smTotalIndexEl) smTotalIndexEl.textContent = sections.length;

    // --- Desktop Controller Elements ---
    const lgContainer = document.querySelector('.page-controller-lg');
    const lgIndicators = document.querySelectorAll('.page-controller-lg .indicator');

    // Image Paths
    const imgInactive = "/media/icons/indication-dot.svg";
    const imgActive = "/media/icons/indication-dot-active.svg";

    /* =========================================
       2. UI INTERACTIONS (jQuery)
       ========================================= */
    if (typeof $ !== 'undefined') {
        // Toggle Details
        $(".snh-icon").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).siblings(".details").children(".p2").toggleClass("d-none");
            $(this).parent(".itb").toggleClass("active");
        });

        // Hover Logic
        let hoverTimeout; 
        $(".page-controller-lg").mouseenter(function () {
            clearTimeout(hoverTimeout); 
            $(".page-controller-lg .p2").addClass("show");
        });
        $(".page-controller-lg").mouseleave(function () {
            hoverTimeout = setTimeout(function() {
                $(".page-controller-lg .p2").removeClass("show");
            }, 300); 
        });
        $(".page-controller-lg .indicator").hover(
            function () { $(this).children(".p2").addClass("hover"); }, 
            function () { $(this).children(".p2").removeClass("hover"); }
        );
    }

    /* =========================================
       3. SCROLL SPY & VISIBILITY
       ========================================= */

    // A. Observer for Active State
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = sections.indexOf(entry.target);
                if (index !== -1) {
                    updateActiveState(index);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    function updateActiveState(index) {
        // --- 1. Update Small Controller Logic ---
        
        // A. Update Active Text Indicator
        smIndicators.forEach(ind => ind.classList.remove('active'));
        if (smIndicators[index]) {
            smIndicators[index].classList.add('active');
        }

        // B. Update Progress & Numbers (New Logic)
        const currentStep = index + 1;
        const totalSteps = sections.length;
        // 計算百分比 (例如: 1/7 * 100 = 14%)
        const percentage = Math.round((currentStep / totalSteps) * 100);

        // 更新數字: 1 / 7
        if(smCurrentIndexEl) smCurrentIndexEl.textContent = currentStep;
        
        // 更新進度條長度
        if(smProgressBar) {
            smProgressBar.style.width = percentage + "%";
            smProgressBar.setAttribute('aria-valuenow', percentage);
        }

        // 更新百分比文字: 14%
        if(smProgressText) smProgressText.textContent = percentage + "%";


        // --- 2. Update Large Controller Logic ---
        if (lgIndicators.length > 0) {
            lgIndicators.forEach((ind) => {
                ind.classList.remove('active');
                const img = ind.querySelector('img');
                if(img) img.src = imgInactive;
            });

            if (lgIndicators[index]) {
                const targetInd = lgIndicators[index];
                targetInd.classList.add('active');
                const img = targetInd.querySelector('img');
                if(img) img.src = imgActive;
            }
        }
    }

    // --- B. Visibility Logic ---
    function toggleControllerVisibility() {
        const firstSection = sections[0]; 
        const lastSection = sections[sections.length - 1]; 

        if (!firstSection || !lastSection) return;

        const firstRect = firstSection.getBoundingClientRect();
        const lastRect = lastSection.getBoundingClientRect();
        
        const triggerPoint = 300; 

        const isInsideZone = (firstRect.top <= triggerPoint) && (lastRect.bottom > triggerPoint);

        if (isInsideZone) {
            if(smContainer) smContainer.classList.add('visible');
            if(lgContainer) lgContainer.classList.add('visible');
        } else {
            if(smContainer) smContainer.classList.remove('visible');
            if(lgContainer) lgContainer.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleControllerVisibility);
    toggleControllerVisibility();

    /* =========================================
       4. CLICK TO SCROLL
       ========================================= */
    function scrollToSection(index) {
        const targetSection = sections[index];
        if (targetSection) {
            const yOffset = -100; 
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    smIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => scrollToSection(index));
    });

    lgIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => scrollToSection(index));
    });
});