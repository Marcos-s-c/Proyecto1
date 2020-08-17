var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../modelo/modelo_usuario");

//guarda usuarios
router.post("/personas", async (req, res) => {

  console.log(req.body)
  const usuario = new User(req.body);
  try {
    await usuario.save();
    //const token = await usuario.generarTokenDeAutenticacion();
    res.status(201).send({ usuario });
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});


module.exports = router;
