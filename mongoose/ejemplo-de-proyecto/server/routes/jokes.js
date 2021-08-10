const { Router } = require("express");

const router = Router();

router.get("/", require("../controllers/allJokes"));
router.get("/random", require("../controllers/randomJoke"));
router.get("/:jokeId", require("../controllers/jokeById"));
router.post("/new", require("../controllers/newJoke"));
router.put("/update/:jokeId", require("../controllers/updateJoke"));
router.delete("/delete/:jokeId", require("../controllers/deleteJoke"));

module.exports = router;
