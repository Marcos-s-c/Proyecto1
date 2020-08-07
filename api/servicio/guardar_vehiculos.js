var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Vehiculo = require("../modelo/modelo_vehiculos");

router.post("/vehiculo", function (req, res) {
  var GuardarVehiculo = new Vehiculo({
    _id: new mongoose.Types.ObjectId(),
    marca: req.body.marca,
    modelo: req.body.modelo,
    year: req.body.year,
    placa: req.body.placa,
  });

  GuardarVehiculo.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

var Moto = require("../modelo/modelo_motos");

router.post("/moto", function (req, res) {
  var GuardarMoto = new Moto({
    _id: new mongoose.Types.ObjectId(),
    marca: req.body.marca,
    modelo: req.body.modelo,
    year: req.body.year,
    placa: req.body.placa,
  });

  GuardarMoto.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});



module.exports = router;
