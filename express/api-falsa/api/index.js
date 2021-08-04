const { Router } = require("express");

const router = Router();

router.get("/users/new", require("./controllers/newUser"));
router.post("/users/create", require("./controllers/createUser"));
router.get("/companies/new", require("./controllers/newCompany"));
router.get("/user/company", require("./controllers/userCompany"));

module.exports = router;
