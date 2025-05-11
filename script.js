function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const mensaje = document.getElementById('mensajeAmor');

  envelope.classList.add('open');

  // Mostrar el mensaje con un pequeño retardo
  setTimeout(() => {
    mensaje.style.opacity = '1';
  }, 1000); // Aparece 1 segundo después del clic
}
