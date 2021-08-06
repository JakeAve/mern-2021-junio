const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BromaSchema = new Schema({
  setup: {
    type: String,
    required: [true, 'el setup es requerido para una broma'],
  },
  punchline: {
    type: String,
    required: [true, 'el punchline es requerido para una broma'],
  },
});

const BromaModel = model('broma', BromaSchema);

module.exports = { BromaSchema, BromaModel };
