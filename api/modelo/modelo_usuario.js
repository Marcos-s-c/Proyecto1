var mongoose = require("mongoose");

var modelousuario = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  cedula: Number,
  correo: String,
  nivel: String,
  password: String,
});

module.exports = mongoose.model("Usuario", modelousuario, "Usuarios");
