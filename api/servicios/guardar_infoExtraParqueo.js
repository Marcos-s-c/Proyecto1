var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parqueo = require("../modelo/modelo_parqueo");

router.post("/infoExtraParqueo", function (req, res) {
  console.log("666");
  let GuardarInfoExtraParqueo = {
    bicicletas: req.body.bicicletas,
    motocicletas: req.body.motocicletas,
    automoviles: req.body.automoviles,
    pesado: req.body.pesado,
    email: req.body.email,
  };
  parqueo.findOne({ email: req.body.email }).then(function (data) {
    data.bicicletas = req.body.bicicletas;
    data.motocicletas = req.body.motocicletas;
    data.automoviles = req.body.automoviles;
    data.pesado = req.body.pesado;
    data.save();
    console.log(data);
  });
});

module.exports = router;
