// script.ts
// Select the skills section and the toggle button
var skillsSection = document.getElementById("skills-section");
var toggleButton = document.getElementById("toggle-skills");
// Toggle function to show or hide the skills section
function toggleSkillsVisibility() {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
}
// Attach the toggle function to the button's click event
toggleButton.addEventListener("click", toggleSkillsVisibility);
