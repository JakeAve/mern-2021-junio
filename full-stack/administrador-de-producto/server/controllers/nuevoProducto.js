const { ProductoModel } = require("../models/Producto");

const nuevoProducto = async (req, res) => {
  try {
    const { título, precio, descripción } = req.body;

    const existiente = await ProductoModel.findOne({ título });

    if (existiente) throw new Error("Este producto ya existe");

    const doc = await ProductoModel.create({ título, precio, descripción });

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoProducto;
