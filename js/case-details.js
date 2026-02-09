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
        document.querySelector('.outcs')   // 6. Outcomes
    ];

    // Mobile Controller Elements
    const smIndicators = document.querySelectorAll('.page-controller-sm .indicator');
    const smContainer = document.querySelector('.page-controller-sm');

    // Desktop Controller Elements
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

        // Hover Delay Logic for Large Controller
        let hoverTimeout; 

        $(".page-controller-lg").mouseenter(function () {
            clearTimeout(hoverTimeout); 
            $(".p2").addClass("show");
        });

        $(".page-controller-lg").mouseleave(function () {
            hoverTimeout = setTimeout(function() {
                $(".p2").removeClass("show");
            }, 300); 
        });

        $(".page-controller-lg .indicator").hover(
            function () { $(this).children(".p2").addClass("hover"); }, 
            function () { $(this).children(".p2").removeClass("hover"); }
        );
    }

    /* =========================================
       3. SCROLL SPY & VISIBILITY (Vanilla JS)
       ========================================= */

    // A. Observer for Active State
    // FIX: Changed rootMargin to trigger when section is near the top
    const observerOptions = {
        root: null,
        // '-20% 0px -60% 0px' means:
        // Top boundary is 20% down from top of viewport.
        // Bottom boundary is 60% up from bottom.
        // This creates a "sweet spot" near the top of the screen.
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
        // 1. Update Small Controller
        smIndicators.forEach(ind => ind.classList.remove('active'));
        if (smIndicators[index]) {
            smIndicators[index].classList.add('active');
            // Auto scroll SM menu
            const scrollLeft = smIndicators[index].offsetLeft - (smContainer.offsetWidth / 2) + (smIndicators[index].offsetWidth / 2);
            smContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }

        // 2. Update Large Controller (Class + Image Swap)
        if (lgIndicators.length > 0) {
            lgIndicators.forEach((ind) => {
                ind.classList.remove('active');
                // Reset ALL images to inactive first
                const img = ind.querySelector('img');
                if(img) img.src = imgInactive;
            });

            // Set Current to Active
            if (lgIndicators[index]) {
                const targetInd = lgIndicators[index];
                targetInd.classList.add('active');
                
                // Swap Image to Active
                const img = targetInd.querySelector('img');
                if(img) img.src = imgActive;
            }
        }
    }
// --- B. Visibility Logic (Show/Hide BOTH controllers) ---
    function toggleControllerVisibility() {
        const firstSection = sections[0]; 
        const lastSection = sections[sections.length - 1]; 

        if (!firstSection || !lastSection) return;

        const firstRect = firstSection.getBoundingClientRect();
        const lastRect = lastSection.getBoundingClientRect();
        
        // ADJUST THIS VALUE to control timing:
        // 100 = Shows when section hits the top (Late)
        // 300 = Shows when section is ~1/3 down the screen (Earlier)
        // 500 = Shows when section is ~1/2 down the screen (Very Early)
        const triggerPoint = 300; 

        // Logic:
        // 1. Show if the Top of First Section is ABOVE the trigger point ( <= 300 )
        // 2. Hide if the Bottom of Last Section is ABOVE the trigger point (scrolled past it)
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
            // FIX: Offset needs to be adjusted based on header height
            // -100px usually clears the sticky navbar and ensures the IntersectionObserver catches it
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