document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("loading");
    const text = "Coming Soon..."; // Text to type out
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