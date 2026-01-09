// Mobile menu
const btn = document.getElementById("mobile-btn");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Modal Fullscreen
const modal = document.getElementById("modal");
const modalIframe = document.getElementById("modal-iframe");
const closeBtn = document.querySelector(".close");

// Quando clicar no botão de fullscreen
const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
fullscreenButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iframe = btn.previousElementSibling; // pega iframe do phone-frame
        modalIframe.src = iframe.src;
        modal.classList.add('open');
    });
});

// Fechar modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    modalIframe.src = "";
});

// Fechar modal clicando fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
        modalIframe.src = "";
    }
});
