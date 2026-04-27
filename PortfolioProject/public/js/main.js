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
function loadAbout(section) {
  const container = document.getElementById("about-content");

  container.innerHTML = "<p>Loading...</p>";

  fetch("PortfolioProject/public/about/" + section + ".html")
    .then(res => res.text())
    .then(data => {
      container.innerHTML = data;

      // remove active from all
      document.querySelectorAll(".about-btn").forEach(btn => {
        btn.classList.remove("active");
      });

      // add active to clicked button
      event.target.classList.add("active");
    })
    .catch(() => {
      container.innerHTML = "<p>Failed to load content.</p>";
    });
}

