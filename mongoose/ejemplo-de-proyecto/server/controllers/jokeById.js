const { BromaModel } = require('../models/Broma');

const jokeById = async (req, res) => {
  try {
    const { jokeId } = req.params;

    const broma = await BromaModel.findById(jokeId);
    // const broma = await BromaModel.findOne({_id: jokeId});

    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = jokeById;
