var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");
const { request } = require("express");

router.post("/solicitud_parqueo/guardar", function (req, res) {
  console.log("llegó");
  var SaveRequests = new ParkingRequest({
    ownersName: req.body.ownersName,
    usersId: req.body.usersId,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    parkingName: req.body.parkingName,
    provincia: req.body.provincia,
    canton: req.body.canton,
    distrito: req.body.distrito,
    shoppingCenter: req.body.shoppingCenter,
    address: req.body.address,
  });

  SaveRequests.save()
    .then(function (result) {
      res.json(result);
      console.log("Datos guardados");
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("save");
});

module.exports = router;
