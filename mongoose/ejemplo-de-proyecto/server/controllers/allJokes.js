const { BromaModel } = require('../models/Broma');

const allJokes = async (req, res) => {
  try {
    const broma = await BromaModel.find();

    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = allJokes;
