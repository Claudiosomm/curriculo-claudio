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

// Botão fullscreen
const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
fullscreenButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iframe = btn.previousElementSibling;
        modalIframe.src = iframe.src;
        modal.classList.add('open');
    });
});

// Fechar modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    modalIframe.src = "";
});

// Fechar modal clicando fora
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
        modalIframe.src = "";
    }
});

// ==============================
// ROLAGEM AUTOMÁTICA SNAP
// ==============================
const scrollContainer = document.querySelector('.projects-scroll');
let isDown = false, startX, scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener('mouseleave', () => { isDown = false; scrollContainer.classList.remove('active'); });
scrollContainer.addEventListener('mouseup', () => { 
    isDown = false; 
    scrollContainer.classList.remove('active'); 
    snapScroll();
});
scrollContainer.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Função para snap automático
function snapScroll() {
    const cardWidth = scrollContainer.querySelector('.phone-card').offsetWidth + 25; // largura + gap
    const scroll = scrollContainer.scrollLeft;
    const snapIndex = Math.round(scroll / cardWidth);
    scrollContainer.scrollTo({
        left: snapIndex * cardWidth,
        behavior: 'smooth'
    });
}
