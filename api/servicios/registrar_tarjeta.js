var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Tarjeta = require("../modelo/modelo_tarjeta");

router.post("/tarjetas/guardar", function (req, res) {
  var guardarTarjeta = new Tarjeta({
    numeroTarjeta: req.body.inputNumero,
    nombreTarjeta: req.body.inputNombre,
    mesSeleccionado: req.body.selectMes,
    yearSeleccionado: req.body.selectYear,
    firmaCCV: req.body.inputCCV
  });

  guardarTarjeta.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
