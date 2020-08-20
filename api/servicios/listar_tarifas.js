var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parking = require("../modelo/modelo_parqueo");

router.get("/tarifas/listar", function (req, res) {
  var email = "maria_e@gmail.com";

  parking.findOne({ email: email }, function (err, parkingResult) {
    if (parkingResult == null) {
      console.log(
        "El parqueo con el correo " + email + "no esta en la base de datos."
      );
    } else {
      res.json(parkingResult.tarifas);
    }
  });
});

module.exports = router;
