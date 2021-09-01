const { Router } = require("express");

const api = Router();

const userController = require("../controllers/user");
const { authorize } = require("../jwt");

api.get("/test", (req, res) => res.json({ message: "OK" }));
api.get("/user/:id", authorize, userController.getUserById);
api.post("/user-email", authorize, userController.getUserByEmail);
api.get("/sensitive-info", authorize, (req, res) =>
  res.json({ message: "Secret info" })
);

module.exports = api;
