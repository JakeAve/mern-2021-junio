const { BromaModel } = require('../models/Broma');

const deleteJoke = async (req, res) => {
  try {
    const { jokeId } = req.params;

    const broma = await BromaModel.findByIdAndDelete(jokeId);

    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = deleteJoke;
