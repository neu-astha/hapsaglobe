
var swiper = new Swiper(".home__projects", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".home__projectsnav.swiper-button-next",
      prevEl: ".home__projectsnav.swiper-button-prev",
    },
  });



document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');

    // Attempt to play audio on page load
    audio.play().then(() => {
        // Autoplay succeeded
        playPauseBtn.textContent = 'Pause';
    }).catch(() => {
        // Autoplay was blocked by the browser
        playPauseBtn.textContent = 'Play';
    });

    // Restart audio on page reload
    window.onload = function() {
        audio.currentTime = 0; // Reset audio to the beginning
    };

    // Toggle between Play and Pause
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});