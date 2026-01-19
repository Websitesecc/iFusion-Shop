// Sidebar Toggle
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Carrusel Lógica
let currentSlide = 0;
const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');

function setSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentIdx * 100}%)`; // Corregido abajo
    updateCarousel();
}

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Auto Play Carrusel
setInterval(() => {
    currentSlide = (currentSlide + 1) % 5;
    updateCarousel();
}, 5000);

// Actualizar Precios iPhone
function update(el) {
    const card = el.closest('.apple-card');
    const mPrice = parseFloat(card.querySelector('.m-sel').value);
    const sPrice = parseFloat(card.querySelector('.s-sel').value);
    card.querySelector('.apple-price span').innerText = (mPrice + sPrice).toFixed(2);
}

// WhatsApp Pedido iPhone
function buyPhone(btn) {
    const card = btn.closest('.apple-card');
    const model = card.querySelector('.m-select option:checked').getAttribute('data-m');
    const storage = card.querySelector('.s-select option:checked').getAttribute('data-s');
    const price = card.querySelector('.apple-price span').innerText;
    const msg = `Hola iFusion! Deseo comprar el ${model} de ${storage} por S/ ${price}.`;
    window.open(`https://wa.me/51991068893?text=${encodeURIComponent(msg)}`);
}

// WhatsApp Accesorio
function buyAcc(name) {
    const msg = `Hola! Consulto disponibilidad de ${name}.`;
    window.open(`https://wa.me/51991068893?text=${encodeURIComponent(msg)}`);
}

// Buscador
function filterProducts() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.searchable').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(q) ? "block" : "none";
    });
}

