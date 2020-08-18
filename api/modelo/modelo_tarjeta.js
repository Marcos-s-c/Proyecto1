"use strict";
var mongoose = require('mongoose');

var modeloTarjeta = mongoose.Schema({
    inputNumero:    {type: String, required: true, unique: true},
    inputNombre:    {type: String, required: true, unique: true},
    selectMes:      {type: String, required: true, unique: true},
    selectYear:     {type: String, required: true, unique: true},
    inputCCV:       {type: String, required: true, unique: true}
});

module.exports = mongoose.model("Tarjeta", modeloTarjeta, "Tarjetas" );
