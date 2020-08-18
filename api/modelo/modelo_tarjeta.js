"use strict";
var mongoose = require("mongoose");

var modeloTarjeta = mongoose.Schema({
  numeroTarjeta: { type: String, required: true, unique: true },
  nombreTarjeta: { type: String, required: true },
  mesSeleccionado: { type: String, required: true },
  yearSeleccionado: { type: String, required: true },
  firmaCCV: { type: String, required: true },
});

module.exports = mongoose.model("Tarjeta", modeloTarjeta, "Tarjetas");
