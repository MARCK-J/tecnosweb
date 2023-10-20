// Obtener todos los elementos principales del menú
const mainMenuItems = document.querySelectorAll('.menu > li');

// Agregar evento de clic a cada elemento principal
mainMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Obtener el submenú correspondiente al elemento clickeado
    const submenu = item.querySelector('.submenu');

    // Toggle para mostrar u ocultar el submenú con animación
    submenu.classList.toggle('active');
  });
});



