const { AutorModel } = require("../models/Autor");

const putAutor = async (req, res) => {
  try {
    const { idDeAutor } = req.params;
    const { nombre } = req.body;

    const autor = await AutorModel.findById(idDeAutor);
    autor.nombre = nombre;
    await autor.save();

    res.json(autor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = putAutor;
