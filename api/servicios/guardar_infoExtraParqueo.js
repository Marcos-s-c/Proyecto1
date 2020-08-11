var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var espacio = require("../modelo/modelo_espacios");

router.post("/espacio", function (req, res) {
    
  let GuardarEspacio = new espacio({
    _id: new mongoose.Types.ObjectId(),
    bicicletas: req.body.bicicletas,
    motocicletas: req.body.motocicletas,
    automoviles: req.body.automoviles,
    pesado: req.body.pesado,
  });

  GuardarEspacio.save()
  .then(function (resultado) {
      res.json(resultado)
  })
  .catch(function (error) {
      console.log(error)
  })

});

module.exports = router;
