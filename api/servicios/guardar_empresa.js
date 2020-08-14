var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Empresa = require("../modelo/modelo_empresa");

router.post("/empresas", function (req, res) {
  var post_nombre = req.body.nombre;
  var post_carrera = req.body.carrera;
  var post_edad = req.body.edad;

  var empresaGuardar = new Empresa({
    _id: new mongoose.Types.ObjectId(),
    nombre: post_nombre,
    carrera: post_carrera,
    edad: post_edad,
  });

  empresaGuardar.save()
    .then(function (result) {
      console.log("Empresa Guardada");
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
