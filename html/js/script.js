// =========================
// MENU PARA CELULAR
// =========================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// =========================
// TEMA CLARO E ESCURO
// =========================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("aurora-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        themeToggle.textContent = isDark ? "☀️" : "🌙";

        localStorage.setItem(
            "aurora-theme",
            isDark ? "dark" : "light"
        );
    });
}

// =========================
// FORMULÁRIO DE CONTATO
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Mensagem registrada! Este formulário é demonstrativo.");

        contactForm.reset();

    });

}