"use strict";
let mongoose = require("mongoose");

let solicitudSchema = new mongoose.Schema({
  state: { type: String, required: true },
  ownersName: { type: String, required: true },
  usersId: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  dateOfBirth: { type: Date, unique: false, required: true },
  parkingName: { type: String, required: true },
  provincia: { type: String, required: true },
  canton: { type: String, required: true },
  distrito: { type: String, required: true },
  shoppingCenter: { type: String, required: true },
  address: { type: String, unique: false, required: false },
});

module.exports = mongoose.model(
  "Solicitud",
  solicitudSchema,
  "SolicitudesDeParqueo"
);
