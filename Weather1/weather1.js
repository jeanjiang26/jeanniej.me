document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".charts-container");
    const image = container.querySelector("img");
    const magnifier = document.getElementById("magnifier");

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const zoomFactor = 2; // Adjust the zoom factor
        const magnifierSize = 100; // Match magnifier size in CSS

        // Show the magnifier
        magnifier.style.display = "block";
        magnifier.style.left = `${x - magnifierSize / 2}px`;
        magnifier.style.top = `${y - magnifierSize / 2}px`;

        // Clone the image into the magnifier if not already done
        let magnifiedImage = magnifier.querySelector("img");
        if (!magnifiedImage) {
            magnifiedImage = image.cloneNode();
            magnifiedImage.style.position = "absolute";
            magnifiedImage.style.width = `${image.width * zoomFactor}px`;
            magnifiedImage.style.height = `${image.height * zoomFactor}px`;
            magnifier.appendChild(magnifiedImage);
        }

        // Adjust the position of the zoomed image
        magnifiedImage.style.left = `-${x * zoomFactor - magnifierSize / 2}px`;
        magnifiedImage.style.top = `-${y * zoomFactor - magnifierSize / 2}px`;
    });

    container.addEventListener("mouseleave", () => {
        magnifier.style.display = "none";
        magnifier.innerHTML = ""; // Clear the cloned image
    });
});
