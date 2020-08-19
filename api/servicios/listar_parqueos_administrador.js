var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parking = require("../modelo/modelo_parqueo");

router.get("/parqueos/listar/administrador", function (req, res) {
  parking
    .find()
    .exec()
    .then(function (result) {
      res.json(result);
    })

    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
