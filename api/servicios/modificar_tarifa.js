var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parking = require("../modelo/modelo_parqueo");

router.post("/tarifas/modificar", function (req, res) {
  //Update

  parking
    .updateOne(
      { nombreDelVehiculo: req.body.vehicle },
      {
        $set: { tarifa: req.body.tarifa },
      }
    )
    .then(function () {
      console.log("Actualización realizada");
    });

  res.json({ message: "Tarifa editada" });
});

module.exports = router;
