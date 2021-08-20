const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Nombre es requerido"],
    minLength: [3, "Nombre debe tener 3 letras o más"],
    maxLength: [50, "Nombre no puede ser tan largo"],
  },
});

const AutorModel = mongoose.model("autor", AutorSchema);

module.exports = { AutorSchema, AutorModel };
