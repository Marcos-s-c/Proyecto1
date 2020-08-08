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
});

module.exports = mongoose.model("Parqueo", modeloParqueo, "Parqueos");
