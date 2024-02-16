const swiper = new Swiper('.js-testimonials-slider', {
  // Optional parameters
  grabCursor: true,
  spaceBetween: 30,
  pagination:{
    el: '.js-testimonials-pagination',
    clickable: true
  },
  breakpoints:{
    768:{
      slidesPerView: 2
    }
  }
});


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


  