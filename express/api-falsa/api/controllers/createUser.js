const Usuario = require("../../models/Usuario");

const createUser = (req, res) => {
  const { name, apellido } = req.body;
  const user = { ...new Usuario(), nombre: name, apellido: apellido };

  res.json(user);
};

module.exports = createUser;
