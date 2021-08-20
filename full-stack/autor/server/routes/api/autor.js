const { Router } = require("express");

const router = Router();

router.get("/", require("../../controllers/getAutores"));
router.post("/", require("../../controllers/postAutor"));
router.put("/:idDeAutor", require("../../controllers/putAuthor"));
router.delete("/:idDeAutor", require("../../controllers/deleteAutor"));

module.exports = router;
