const db = new sqlite3.Database("../../database.db");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("PortfolioProject/public"));

app.get("/api/laboratory", (req, res) => {
  res.json([
    {
      title: "Augmented Reality Game",
      tag: "LensStudio",
      image: "Images/ARGame.png",
      video: "https://www.youtube.com/embed/2yJgwwDcgV8"
    },
    {
      title: "Dungeon Crawler Game",
      tag: "Unity",
      image: "Images/EgyptGame.png",
      video: "https://www.youtube.com/embed/2yJgwwDcgV8"
    },
    {
      title: "Virtual Reality Game",
      tag: "UnityVR",
      image: "Images/GhostGame.png",
      video: "https://www.youtube.com/embed/2yJgwwDcgV8"
    },
    {
      title: "MC Virtual Reality Game",
      tag: "UnityVR",
      image: "Images/MinecraftGame.png",
      video: "https://www.youtube.com/embed/2yJgwwDcgV8"
    },
    {
      title: "3D World Game",
      tag: "Unity",
      image: "Images/SlenderGame.png",
      video: "https://www.youtube.com/embed/2yJgwwDcgV8"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});