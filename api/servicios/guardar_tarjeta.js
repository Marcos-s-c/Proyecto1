var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Tarjeta = require("../modelo/modelo_tarjeta");

router.post("/tarjetas/guardar", function (req, res) {
  console.log("alert");
  var guardarTarjeta = new Tarjeta({
    numeroTarjeta: req.body.numeroTarjeta,
    nombreTarjeta: req.body.nombreTarjeta,
    mesSeleccionado: req.body.mesSeleccionado,
    yearSeleccionado: req.body.yearSeleccionado,
    firmaCCV: req.body.firmaCCV,
  });

  guardarTarjeta
    .save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
