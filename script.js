const btn = document.getElementById("mobile-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});
