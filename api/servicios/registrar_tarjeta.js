var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var tarjeta = require("../modelo/modelo_tarjeta");

router.post("/tarjetas", function (req, res) {
  console.log("llegó");
  var saveTarjeta = new tarjeta({
    numberCard: req.body.numberCard,
    nameCard: req.body.nameCard,
    monthExpiration: req.body.monthExpiration,
    yearExpiration: req.body.yearExpiration,
    ccv: req.body.ccv,
  });

  saveTarjeta.save()
    .then(function (result) {
      res.json(result);
      console.log("Datos guardados");
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("save");
});

module.exports = router;