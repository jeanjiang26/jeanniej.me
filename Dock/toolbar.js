document.addEventListener("DOMContentLoaded", function () {
    // Toolbar HTML structure
    const toolbarHTML = `
        <div class="toolbar">
            <a href="../index.html" class="toolbar-item" data-id="index">All</a>
            <a href="../FirstSolar/first-solar.html" class="toolbar-item" data-id="first-solar">RedPL</a>
            <a href="../Weather1/weather1.html" class="toolbar-item" data-id="weather1">Weather Search 1</a>
            <a href="../Weather2/weather2.html" class="toolbar-item" data-id="weather2">Weather Search 2</a>
            <a href="../Forest/forest.html" class="toolbar-item" data-id="forest">National Forest</a>
            <a href="../NXTMode/nxtmode.html" class="toolbar-item" data-id="nxtmode">NXTMode</a>
            <a href="../JoesTable/joestable.html" class="toolbar-item" data-id="joestable">JoesTable</a>
            <a href="../TrojanBytes/trojanbytes.html" class="toolbar-item" data-id="trojanbytes">TrojanBytes</a>
        </div>
    `;

    // Insert toolbar into the container
    const container = document.getElementById("toolbar-container");
    if (container) {
        container.innerHTML = toolbarHTML;
    }

    // Inject CSS styles dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: white;
            font-weight: bolder;
        }
        .toolbar {
            margin-left: 4%;
            margin-right: 4%;
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 10px 0;
            background-color: white;
        }
        .toolbar-item {
            font-size: 16px;
            font-weight: bold;
            color: lightgray;
            cursor: pointer;
            transition: color 0.3s;
            text-decoration: none;
            wrap: nowrap;
        }
        .toolbar-item.active {
            color: black;
        }
        .toolbar-item:hover {
            text-decoration: line-through;
            color: black;
            font-style: italic;
        }
        @media (max-width: 600px) {
            .toolbar {
                gap: 10px; /* Adjust gap for smaller screens */
                flex-wrap: wrap; /* Wrap toolbar items on smaller screens */
            }
            .toolbar-item {
                font-size: 14px; /* Adjust font size for smaller screens */
            }
        }
    `;
    document.head.appendChild(style);

    // Function to set active class based on the current page URL
    function highlightActiveLink() {
        const currentPath = window.location.pathname.toLowerCase();

        document.querySelectorAll('.toolbar-item').forEach(item => {
            const linkPath = new URL(item.href, window.location.origin).pathname.toLowerCase();
            if (currentPath === linkPath) {
                item.classList.add('active');
                localStorage.setItem("activeToolbarLink", item.getAttribute("data-id"));
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Function to set active class on click and store in localStorage
    function setActive(event) {
        document.querySelectorAll('.toolbar-item').forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');

        // Store the active link in localStorage
        localStorage.setItem("activeToolbarLink", event.target.getAttribute("data-id"));
    }

    // Restore active link if navigating via external links
    const savedActiveLink = localStorage.getItem("activeToolbarLink");
    if (savedActiveLink) {
        const activeElement = document.querySelector(`.toolbar-item[data-id="${savedActiveLink}"]`);
        if (activeElement) {
            activeElement.classList.add("active");
        }
    }

    // Highlight the correct link on page load
    highlightActiveLink();

    // Attach event listeners to toolbar items
    document.querySelectorAll(".toolbar-item").forEach(item => {
        item.addEventListener("click", setActive);
    });
});
