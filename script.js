// Seleccionar los elementos
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Escuchar el clic en el botón del menú
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
