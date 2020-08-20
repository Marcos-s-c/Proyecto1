var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var rate = require("../modelo/modelo_parqueo");

router.get("/tarifas/listar", function (req, res) {
  rate
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
