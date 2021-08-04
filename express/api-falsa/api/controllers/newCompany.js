const Empresa = require("../../models/Empresa");

const newCompany = (req, res) => {
  const newEmpresa = new Empresa();
  res.json(newEmpresa);
};

module.exports = newCompany;
