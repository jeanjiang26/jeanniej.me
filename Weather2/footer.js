document.addEventListener("DOMContentLoaded", function() {
    fetch('../header-footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Load the footer CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../header-footer/footer.css'; // Correct path to your footer CSS file
    document.head.appendChild(link);
});