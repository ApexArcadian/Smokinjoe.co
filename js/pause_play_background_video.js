// Get the video
var video = document.getElementById("bgVideo");

// Get the button
var btn = document.getElementById("pauseBtn");

// Pause and play the video, and change the button text
function pausePlay() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}