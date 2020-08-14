var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");

router.post("/solicitud_parqueo/denegar", function (req, res) {
  console.log(req.body);
});
