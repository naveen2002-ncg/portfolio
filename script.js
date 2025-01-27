// Typing Effect
const typingElement = document.getElementById("typing-effect");
const words = ["Web Developer", "Designer", "Problem Solver"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[wordIndex];
    typingElement.textContent = currentWord.slice(0, letterIndex) + "|";

    if (!isDeleting && letterIndex < currentWord.length) {
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
        setTimeout(typeEffect, 100);
    } else if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
    }
}
typeEffect();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        projects.forEach((project) => {
            if (filter === "all" || project.dataset.category === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
