const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ msj: "bien" });
});

router.post("/", (req, res) => {
  req.io.emit("nuevo-dato");
  res.json({ msj: "neuvo data" });
});

module.exports = router;
