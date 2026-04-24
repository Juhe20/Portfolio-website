const labCards = document.querySelectorAll(".lab-card");
const videoOverlay = document.getElementById("videoOverlay");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

labCards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoUrl = card.dataset.video;
    videoFrame.src = videoUrl;
    videoOverlay.classList.add("active");
  });
});

function closeVideoOverlay() {
  videoOverlay.classList.remove("active");
  videoFrame.src = "";
}

closeVideo.addEventListener("click", closeVideoOverlay);

videoOverlay.addEventListener("click", (event) => {
  if (event.target === videoOverlay) {
    closeVideoOverlay();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideoOverlay();
  }
});