"use strict";
var mongoose = require("mongoose");

var modeloConvenio = mongoose.Schema({
    nombreConvenio: { type: String},
    porcentajeConvenio: { type: String}
});

module.exports = mongoose.model("Convenio", modeloConvenio, "Convenios");
