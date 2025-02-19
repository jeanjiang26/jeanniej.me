

document.addEventListener('DOMContentLoaded', function() {
    const viewElements = document.querySelectorAll('.view');
    const projectsSection = document.querySelector('h2.feature'); // Target the "PROJECTS" section

    viewElements.forEach(function(view) {
        view.addEventListener('click', function() {
            if (projectsSection) {
                const offset = 20; // Adjust this to fine-tune spacing
                const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const text = "Jeannie."; // Text to type out
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            nameElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 300); // Adjust typing speed here (300ms per letter)
        }
    }

    // Delay the typing effect by 2 seconds
    setTimeout(() => {
        typeEffect();
    }, 1000); // 2000ms = 2 seconds
});


function toggleMenu() {
    const links = document.querySelector('.header-links');
    links.classList.toggle('show');
}
document.addEventListener('click', function(event) {
    const menuButton = document.querySelector('.menu-button');
    const links = document.querySelector('.header-links');

    if (!menuButton.contains(event.target) && !links.contains(event.target)) {
        links.classList.remove('show');
    }
});
