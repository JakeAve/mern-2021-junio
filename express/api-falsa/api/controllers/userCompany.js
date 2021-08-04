const Empresa = require("../../models/Empresa");
const Usuario = require("../../models/Usuario");

const userCompany = (req, res) => {
  const company = new Empresa();
  const user = new Usuario();
  res.json({ company, user });
};

module.exports = userCompany;
