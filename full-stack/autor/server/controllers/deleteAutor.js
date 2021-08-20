const { AutorModel } = require("../models/Autor");

const deleteAutor = async (req, res) => {
  try {
    const { idDeAutor } = req.params;

    const autor = await AutorModel.findByIdAndDelete(idDeAutor);

    res.json(autor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = deleteAutor;
