const { Router } = require("express");

const router = Router();

router.get("/test", (req, res) => res.json({ productos: "está bien" }));
router.get("/", require("../../controllers/todoProducto"));
router.post("/nuevo", require("../../controllers/nuevoProducto"));

module.exports = router;
