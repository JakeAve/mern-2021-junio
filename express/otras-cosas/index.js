const express = require("express");

const app = express();

// if (process.env.NODE_ENV !== "production") {
app.use(express.static("public"));
// }

app.get("/api", (req, res) => res.json({ hello: "hi" }));
app.get("/unacosa.html", (req, res) => res.json({ route: "unacosa.html" }));
app.get("/ab?cd", (req, res) => res.json({ route: "acd o abcd" })); //signo de interrogación
app.get("/dev-*-art", (req, res) => res.json({ route: "dev-RANDOM-art" }));
// app.get(/dev-.*-art/, (req, res) => res.json({ route: "regex" }));
app.get(/beta/, (req, res) => res.json({ route: "beta" }));
app.get("/old", (req, res) => res.redirect("/new"));
app.get("/new", (req, res) => res.json({ route: "new" }));
app.get("/archivo/:id", (req, res) =>
  res.sendFile("/archivo" + req.params.id + ".json", { root: __dirname })
);

app.listen(5000, () => console.log(`Estamos escuchando en 5000`));
