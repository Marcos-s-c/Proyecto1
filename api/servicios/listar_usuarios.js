var express = require("express");
var router = express.Router();

var Usuario = require("../modelo/modelo_usuario");

router.get("/personas", function (req, res) {
  Usuario.find()
    .exec()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (err) {
      console.log(err);
    });
});

router.post("/personas/empresa", function (req, res) {
  empresa = req.body.empresa;

  Usuario.find({ empresa: empresa })
    .exec()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (err) {
      console.log(err);
    });
});

router.post("/persona/buscar", function (req, res) {
  userID = req.body.cedulaBuscada;

  Usuario.find({ userID: userID })
    .exec()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
