document.addEventListener('DOMContentLoaded', () => {

    const menuButtons = document.querySelectorAll('.menu-icon');
    const closeButton = document.querySelector('.close-btn');
    const overlayMenu = document.getElementById('overlay-menu');
    const html = document.documentElement; // Target the <html> element

    // Function to calculate scrollbar width
    const getScrollbarWidth = () => {
        // Create a temporary div, force scrollbar, measure difference
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // Force scrollbar
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);

        // Calculate the width difference
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        // Clean up temporary elements
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    };

    const openMenu = () => {
        const scrollbarWidth = getScrollbarWidth(); // Get width before hiding scrollbar
        
        // Apply styles to prevent shift and scrolling
        html.style.overflow = 'hidden';
        html.style.paddingRight = `${scrollbarWidth}px`;
        
        overlayMenu.classList.add('active'); // Show the menu
    };

    const closeMenu = () => {
        // Remove styles in reverse order
        html.style.overflow = '';
        html.style.paddingRight = '';
        
        overlayMenu.classList.remove('active'); // Hide the menu
    };

    menuButtons.forEach(button => {
        button.addEventListener('click', openMenu);
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }
    
});