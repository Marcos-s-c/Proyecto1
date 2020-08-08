"use strict";
let mongoose = require("mongoose");

let solicitudSchema = new mongoose.Schema({
  nombreDelPropietario: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  cedula: { type: String, unique: true, required: true },
  nombreDelParqueo: { type: String, required: true },
  provincia: { type: String, required: true },
  canton: { type: String, required: true },
  distrito: { type: String, required: true },
  nombreDelCentroComercial: { type: String, required: true },
});

module.exports = mongoose.model(
  "Solicitud",
  solicitudSchema,
  "SolicitudesDeParqueo"
);
