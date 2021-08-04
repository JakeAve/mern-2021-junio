const Usuario = require("../../models/Usuario");

const newUser = (req, res) => {
  const newUser = new Usuario();
  const conUserAgent = { ...newUser, userAgent: req.userAgent };
  res.json(conUserAgent);
};

module.exports = newUser;
