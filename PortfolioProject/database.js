const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

//Create table+insert data
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      tag TEXT,
      image TEXT,
      video TEXT
    )
  `);

    //Clear existing data
    db.run("DELETE FROM projects");

    const stmt = db.prepare(`
    INSERT INTO projects (title, tag, image, video)
    VALUES (?, ?, ?, ?)
  `);

    const projects = [
        ["Augmented Reality Game", "LensStudio", "Images/ARGame.png", "https://www.youtube.com/embed/2yJgwwDcgV8"],
        ["Dungeon Crawler Game", "Unity", "Images/EgyptGame.png", "https://www.youtube.com/embed/2yJgwwDcgV8"],
        ["Virtual Reality Game", "UnityVR", "Images/GhostGame.png", "https://www.youtube.com/embed/2yJgwwDcgV8"],
        ["MC Virtual Reality Game", "UnityVR", "Images/MinecraftGame.png", "https://www.youtube.com/embed/2yJgwwDcgV8"],
        ["3D World Game", "Unity", "Images/SlenderGame.png", "https://www.youtube.com/embed/2yJgwwDcgV8"]
    ];

    projects.forEach(p => stmt.run(p));

    stmt.finalize();
});

db.close();

console.log("Database created and populated");