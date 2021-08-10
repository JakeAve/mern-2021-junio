const { BromaModel } = require("../models/Broma");

const allJokes = async (req, res) => {
  try {
    const count = await BromaModel.countDocuments().exec();
    const rand = Math.floor(Math.random() * count);
    const doc = await BromaModel.findOne().skip(rand).exec();
    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = allJokes;
