var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../modelo/modelo_usuario");

router.post("/persona", function (req, res) {
    
  let GuardarUsuario = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    correo: req.body.correo,
    nivel: req.body.nivel,
    password:req.body.password
  });

  GuardarUsuario.save()
  .then(function (resultado) {
      res.json(resultado)
  })
  .catch(function (error) {
      console.log(error)
  })

});

router.post("/especializado", function (req, res) {
    
  let GuardarUsuario = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    correo: req.body.correo,
    nombreParqueo: req.body.nombreParqueo,
    ubicacionParqueo: req.body.ubicacionParqueo,
    nivel: 2
  });

  GuardarUsuario.save()
  .then(function (resultado) {
      res.json(resultado)
  })
  .catch(function (error) {
      console.log(error)
  })

});
router.post("/tradicional", function (req, res) {
    
  let GuardarUsuario = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    correo: req.body.correo,
    nivel: 1
  });


  GuardarUsuario.save()
  .then(function (resultado) {
      res.json(resultado)
  })
  .catch(function (error) {
      console.log(error)
  })

});




module.exports = router;
