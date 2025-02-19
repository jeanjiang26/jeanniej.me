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