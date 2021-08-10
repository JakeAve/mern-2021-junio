const { Router } = require("express");

const router = Router();

router.use("/jokes", require("./jokes"));

module.exports = router;
