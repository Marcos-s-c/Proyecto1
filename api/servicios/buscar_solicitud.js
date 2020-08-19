var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var parkingRequest = require("../modelo/modelo_solicitud_parqueo");

router.get("/solicitud_parqueo/buscar/", function (req, res) {
  var searchCriteria = req.query.searchCriteria;
  var searchValue = req.query.searchValue;

  if (searchCriteria == "nombre") {
    parkingRequest
      .find({ parkingName: { $regex: searchValue, $options: "i" } })
      .exec()
      .then(function (result) {
        res.json(result);
      })

      .catch(function (err) {
        console.log(err);
      });
  }
  if (searchCriteria == "estado") {
    parkingRequest
      .find({ state: { $regex: searchValue, $options: "i" } })
      .exec()
      .then(function (result) {
        res.json(result);
      })

      .catch(function (err) {
        console.log(err);
      });
  }
});

module.exports = router;
