"use strict";
var mongoose = require("mongoose");

var modeloTarjeta = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  numberCard: Number,
  nameCard: String,
  monthExpiration: Number,
  yearExpiration: Number,
  ccv: Number,
});

module.exports = mongoose.model("Tarjeta", modeloTarjeta, "Tarjetas");
