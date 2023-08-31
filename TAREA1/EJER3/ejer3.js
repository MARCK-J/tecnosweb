const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  if (!isValidEmail(emailInput.value)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    event.preventDefault();
  }

  if (!isValidPassword(passwordInput.value)) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    event.preventDefault();
  }
});

function isValidEmail(email) {
  return email.includes('@');
}

function isValidPassword(password) {
  return password.length >= 8;
}
