const videoSelect = document.querySelector('#videos');

videoSelect.addEventListener('change', (event) => {
  const selectedVideo = event.target.value;
  videoPlayer.setAttribute('src', selectedVideo);
});
