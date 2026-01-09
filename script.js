// MOBILE MENU
const btn = document.getElementById("mobile-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// EXPANDIR CELULAR
document.querySelectorAll(".expand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const site = btn.getAttribute("data-site");
        document.getElementById("fullscreen-iframe").src = site;
        document.getElementById("fullscreen-modal").style.display = "block";
    });
});

// FECHAR FULLSCREEN
document.querySelector(".close-fullscreen").addEventListener("click", () => {
    document.getElementById("fullscreen-modal").style.display = "none";
    document.getElementById("fullscreen-iframe").src = "";
});
