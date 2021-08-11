const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.json({ message: "end-to-end funciona" }));

module.exports = router;
