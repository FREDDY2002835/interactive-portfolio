console.log("JS loaded");

/* ---------- DARK MODE TOGGLE ---------- */
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

/* ---------- CONTACT FORM VALIDATION ---------- */
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Message sent successfully!");
            form.reset();
        }
    });
}

/* ---------- PROJECTS WINDOW TOGGLE ---------- */
const projectsBtn = document.getElementById("projectsToggleBtn");
const projectsWindow = document.getElementById("projectsWindow");

if (projectsBtn && projectsWindow) {
    projectsBtn.addEventListener("click", function () {
        projectsWindow.classList.toggle("show");
    });
}

const videoBtn = document.getElementById("video");
const videoWindow = document.getElementById("videoWindow");

if (videoBtn && videoWindow) {
    videoBtn.addEventListener("click", function () {
        videoWindow.classList.toggle("show");
    });
}
