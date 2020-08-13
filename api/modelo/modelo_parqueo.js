"use strict";
var mongoose = require("mongoose");

var modeloParqueo = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombreFantasia: String,
  direccion: String,
  ubicacion: Number,
  campos: Array,
  tarifas: Array,
  convenios: Array,
  fechaDeApertura: Date,
  horaDeApertura: Number,
  horaDeCierre: Number,
  bicicletas: Number,
  motocicletas: Number,
  automoviles: Number,
  pesado: Number,
  email: String,
});

module.exports = mongoose.model("Parqueo", modeloParqueo, "Parqueos");
