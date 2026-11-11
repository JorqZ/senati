const form = document.getElementById('login-form');
const password = document.getElementById('password');
const toggle = document.getElementById('toggle-password');
const feedback = document.getElementById('feedback');

toggle.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  toggle.textContent = showing ? 'Ver' : 'Ocultar';
  toggle.setAttribute('aria-label', showing ? 'Mostrar contraseña' : 'Ocultar contraseña');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  feedback.textContent = 'Diseño de demostración: conecta este formulario a tu sistema de autenticación para validar el acceso.';
});
