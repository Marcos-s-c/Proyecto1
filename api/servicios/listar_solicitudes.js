var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");
const { request } = require("express");

router.get("/solicitud_parqueo/listar", function (req, res) {
  ParkingRequest.find()
    .exec()
    .then(function (result) {
      res.json(result);
    })

    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
