const videoOverlay = document.getElementById("videoOverlay");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");


async function loadLaboratoryProjects() {
  try {
    const response = await fetch("/api/laboratory");
    const projects = await response.json();

    const track = document.querySelector(".lab-track");
    track.innerHTML = "";

    projects.forEach((project) => {
      const card = document.createElement("article");
      card.classList.add("lab-card");
      card.dataset.video = project.video;

      card.innerHTML = `
        <div class="lab-tag">${project.tag}</div>
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
      `;

      // click event (video overlay)
      card.addEventListener("click", () => {
        videoFrame.src = project.video;
        videoOverlay.classList.add("active");
      });

      track.appendChild(card);
    });

    
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.classList.add("lab-card");
      card.dataset.video = project.video;

      card.innerHTML = `
        <div class="lab-tag">${project.tag}</div>
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
      `;

      card.addEventListener("click", () => {
        videoFrame.src = project.video;
        videoOverlay.classList.add("active");
      });

      track.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to load projects:", error);
  }
}


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

  container.style.opacity = 0;

  setTimeout(() => {
    fetch("./about/" + section + ".html")
      .then(res => {
        if (!res.ok) throw new Error("404");
        return res.text();
      })
      .then(data => {
        container.innerHTML = data;
        container.style.opacity = 1;

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
  loadLaboratoryProjects(); 

  const firstBtn = document.querySelector(".about-btn");
  if (firstBtn) {
    firstBtn.classList.add("active");
  }

  loadAbout("mahino");
});