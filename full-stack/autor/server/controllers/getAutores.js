const { AutorModel } = require("../models/Autor");

const getAutores = async (req, res) => {
  try {
    const docs = await AutorModel.find();

    res.json(docs);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = getAutores;
