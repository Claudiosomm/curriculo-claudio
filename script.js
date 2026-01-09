// Mobile menu
const btn = document.getElementById("mobile-btn");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => { nav.classList.toggle("open"); });

// Modal Fullscreen
const modal = document.getElementById("modal");
const modalIframe = document.getElementById("modal-iframe");
const closeBtn = document.querySelector(".close");
const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');

fullscreenButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iframe = btn.previousElementSibling;
        modalIframe.src = iframe.src;
        modal.classList.add('open');
    });
});

closeBtn.addEventListener('click', () => { modal.classList.remove('open'); modalIframe.src = ""; });
modal.addEventListener('click', (e) => { if(e.target === modal){ modal.classList.remove('open'); modalIframe.src = ""; } });

// ANIMAÇÃO AO ROLAR
const observers = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in-view'); } });
}, { threshold: 0.2 });

observers.forEach(el => observer.observe(el));
