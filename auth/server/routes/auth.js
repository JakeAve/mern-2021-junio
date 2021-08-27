const { Router } = require("express");
const { authorize } = require("../jwt");

const auth = Router();

auth.get("/test", (req, res) => res.json({ message: "OK" }));
auth.get("/test-cred", authorize, (req, res) => res.json({ message: "OK" }));
auth.post("/register", require("../controllers/register"));
auth.post("/login", require("../controllers/login"));
auth.post("/logout", require("../controllers/logout"));
auth.post("/update-token", authorize, (req, res) =>
  res.json({ message: "Ok" })
);

module.exports = auth;
