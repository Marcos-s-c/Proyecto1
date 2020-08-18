var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Empresa = require("../modelo/modelo_empresa");

router.post("/empresas", async (req, res) => {

  console.log(req.body)
  const empresa = new Empresa(req.body);
  try {
    await empresa.save();
    res.status(201).send({ empresa });
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});


module.exports = router;
