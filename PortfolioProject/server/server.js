const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../database.db");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("../public"));

app.get("/api/laboratory", (req, res) => {
    db.all("SELECT * FROM projects", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});