var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../modelo/modelo_usuario");

router.post("/persona", function (req, res) {
  var GuardarUsuario = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    correo: req.body.correo,
    nivel: req.body.nivel,
  });

  GuardarUsuario.save()
    .then(function (resultado) {
      res.json("correcto");

    })
    .catch(function (error) {
      res.json("error");
    });
});

module.exports = router;
