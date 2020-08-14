var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");

router.post("/solicitud_parqueo/denegar", function (req, res) {
  //Update

  ParkingRequest.updateOne(
    { email: req.body.email },
    {
      $set: { state: "Denegada" },
    }
  ).then(function () {
    console.log("Actualización realizada");
  });
});

module.exports = router;
