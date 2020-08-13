var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../modelo/modelo_usuario");
var empleado = require("../modelo/modelo_empleado");

//guarda usuarios
router.post("/personas", async (req, res) => {
  const usuario = new User(req.body);
  try {
    await usuario.save();
    //const token = await usuario.generarTokenDeAutenticacion();
    res.status(201).send({ usuario });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/empleados", function (req, res) {
  let GuardarUsuario = new empleado({
    _id: new mongoose.Types.ObjectId(),
    userID: req.body.userID,
    puestoLaboral: req.body.puestoLaboral,
    fechaContratacion: req.body.fechaContratacion,
  });

  GuardarUsuario.save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
