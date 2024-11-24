document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.createElement("button");
    themeButton.textContent = "Toggle Dark Mode";
    themeButton.style.position = "fixed";
    themeButton.style.bottom = "10px";
    themeButton.style.right = "10px";
    themeButton.style.padding = "10px";
    themeButton.style.borderRadius = "5px";
    themeButton.style.backgroundColor = "#333";
    themeButton.style.color = "#fff";
    themeButton.style.border = "none";
    themeButton.style.cursor = "pointer";
    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        const root = document.documentElement;
        const currentBackground = getComputedStyle(root).getPropertyValue("--background-color").trim();
        if (currentBackground === "#ffffff") {
            // Switch to Dark Mode
            root.style.setProperty("--background-color", "#333");
            root.style.setProperty("--font-color", "#fff");
            root.style.setProperty("--secondary-color", "#444");
            root.style.setProperty("--primary-color", "#155724"); /* Darker Green */
            root.style.setProperty("--section-bg-color", "#222"); /* Adjust section background */
        } else {
            // Switch to Light Mode
            root.style.setProperty("--background-color", "#ffffff");
            root.style.setProperty("--font-color", "#333");
            root.style.setProperty("--secondary-color", "#f4f4f4");
            root.style.setProperty("--primary-color", "#28a745");
            root.style.setProperty("--section-bg-color", "#f4f4f4"); /* Reset section background */
        }
    });
});
