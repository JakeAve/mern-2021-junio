const { BromaModel } = require('../models/Broma');

const updateJoke = async (req, res) => {
  try {
    const { jokeId } = req.params;
    const { setup, punchline } = req.body;

    const broma = await BromaModel.findByIdAndUpdate(jokeId, {
      setup,
      punchline,
    });

    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = updateJoke;
