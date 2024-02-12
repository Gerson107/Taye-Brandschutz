const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = '❚❚'; // Icono de pausa
  } else {
    video.pause();
    playPauseBtn.textContent = '▶'; // Icono de reproducción
  }
}


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

