function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const mensaje = document.getElementById('mensajeAmor');
  document.getElementById('envelope').classList.add('open');

  envelope.classList.add('open');

  // Reproducir música
  const musica = document.getElementById('audioBackground');
  musica.play();

  // Mostrar el mensaje con un pequeño retardo
  setTimeout(() => {
    mensaje.style.opacity = '1';
  }, 1000); // Aparece 1 segundo después del clic
}
