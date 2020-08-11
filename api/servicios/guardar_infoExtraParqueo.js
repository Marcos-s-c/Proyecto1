var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parqueo = require("../modelo/modelo_parqueo");

router.post("/infoExtraParqueo", function (req, res) {
  let GuardarInfoExtraParqueo = new parqueo({
    _id: new mongoose.Types.ObjectId(),
    bicicletas: req.body.bicicletas,
    motocicletas: req.body.motocicletas,
    automoviles: req.body.automoviles,
    pesado: req.body.pesado,
  });

  GuardarInfoExtraParqueo.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
