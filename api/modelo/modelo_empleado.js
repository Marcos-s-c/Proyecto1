var mongoose = require("mongoose");

var modeloEmpleado = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: Number,
  puestoLaboral: String,
  fechaContratacion: Date,
});

module.exports = mongoose.model("Empleado", modeloEmpleado, "Empleados");
