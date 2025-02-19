document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.backtotop');
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
