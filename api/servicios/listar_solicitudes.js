var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");
const { request } = require("express");

router.get("/solicitud_parqueo/listar", async function (req, res) {
  try{
    const response = await ParkingRequest.find().exec()
    res.send(response)
  }  
  catch(error){
    console.log(err);
    res.status(400).send('Error para encontrar datos')
  }
      // res.json(result);
})

module.exports = router;
