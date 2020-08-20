var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Convenio = require("../modelo/modelo_convenio");

router.post("/guardar/convenio", function (req, res) {
  console.log("alert");


  var guardarConvenio = new Convenio({
    nombreConvenio: req.body.nombreConvenio,
    porcentajeConvenio: req.body.porcentajeConvenio
  });

  guardarConvenio.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;