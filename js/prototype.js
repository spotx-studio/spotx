/**
 * Prototype Section - Tab Switching and Interactions
 * Handles interactive prototype display with tab navigation
 */

$(document).ready(function() {
    // Proto Tab Switching (tabs are now separate at section level)
    $('.proto-tab').on('click', function(e) {
        e.preventDefault();
        
        // Get the tab identifier
        const tabId = $(this).data('content');
        
        // Remove active class from all tabs and content
        $('.proto-tab').removeClass('active');
        $('.proto-tab-content').removeClass('active');
        
        // Add active class to clicked tab
        $(this).addClass('active');
        
        // Show corresponding content
        $('.proto-tab-content[data-content="' + tabId + '"]').addClass('active');
    });
    
    // Keyboard Navigation (Arrow keys to switch tabs)
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const $tabs = $('.proto-tab');
            const $activeTab = $('.proto-tab.active');
            } else if (e.key === 'ArrowLeft') {
                newIndex = (activeIndex - 1 + $tabs.length) % $tabs.length;
            }
            
            $tabs.eq(newIndex).trigger('click');
        }
    });
});
