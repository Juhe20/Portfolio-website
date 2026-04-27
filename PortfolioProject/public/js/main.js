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
function loadAbout(section, event) {
  const container = document.getElementById("about-content");

  // fade out
  container.style.opacity = 0;

  setTimeout(() => {
    fetch("./about/" + section + ".html")
      .then(res => {
        if (!res.ok) throw new Error("404");
        return res.text();
      })
      .then(data => {
        container.innerHTML = data;

        // fade in
        container.style.opacity = 1;

        // update active button (only if event exists)
        if (event) {
          document.querySelectorAll(".about-btn").forEach(btn => {
            btn.classList.remove("active");
          });

          event.target.classList.add("active");
        }
      })
      .catch(() => {
        container.innerHTML = "<p>Failed to load content.</p>";
        container.style.opacity = 1;
      });
  }, 150);
}
 window.addEventListener("DOMContentLoaded", () => {
  const firstBtn = document.querySelector(".about-btn");
  if (firstBtn) {
    firstBtn.classList.add("active");
  }

  loadAbout("mahino");
});
