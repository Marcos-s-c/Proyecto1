var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");

router.post("/solicitud_parqueo/guardar", async function (req, res) {
    const solicitud = new ParkingRequest(req.body);
    console.log(solicitud);
    try{

      await solicitud.save();
      res.status(201).send(solicitud);
    }
    catch(error){
      console.log(error)
      res.status(400).send("No se pudo registrar la solicitud");
    }
  });

module.exports = router;
