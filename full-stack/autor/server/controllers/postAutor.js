const { AutorModel } = require("../models/Autor");

const postAutor = async (req, res) => {
  try {
    const { nombre } = req.body;

    const autor = new AutorModel({ nombre });

    await autor.save();

    res.status(201).json(autor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = postAutor;
