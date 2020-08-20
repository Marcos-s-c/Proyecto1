var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ParkingRequest = require("../modelo/modelo_solicitud_parqueo");
var parking = require("../modelo/modelo_parqueo");

router.post("/solicitud_parqueo/aprobar", async function (req, res) {
  //Update

  await ParkingRequest.updateOne(
    { email: req.body.email },
    {
      $set: { state: "Aprobada" },
    }
  );

  //Parking registration

  ParkingRequest.findOne({ email: req.body.email }, function (
    err,
    approvedRequest
  ) {
    let newParking = new parking({
      nombre: approvedRequest.parkingName,
      nombreDelDueño: approvedRequest.ownersName,
      cedula: approvedRequest.usersId,
      fechaDeNacimiento: approvedRequest.dateOfBirth,
      provincia: approvedRequest.provincia,
      canton: approvedRequest.canton,
      distrito: approvedRequest.distrito,
      email: approvedRequest.email,
      centroComercial: approvedRequest.shoppingCenter,
      direccion: approvedRequest.address,
      password: "12345",
      cantidadCampos: 0,
      latitud: 9.938277,
      longitud: -84.098574,
      estado: "Activo",

      tarifas: [
        {
          nombreDelVehiculo: "Bicicleta",
          tarifa: 0,
          estado: "Activo",
        },
        {
          nombreDelVehiculo: "Motocicleta",
          tarifa: 0,
          estado: "Activo",
        },
        {
          nombreDelVehiculo: "Automóvil",
          tarifa: 0,
          estado: "Activo",
        },
        {
          nombreDelVehiculo: "Furgón y furgoneta",
          tarifa: 0,
          estado: "Activo",
        },
      ],
    });

    newParking
      .save()
      .then(function (result) {
        res.json({ message: "Solicitud aprobada" });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  //rates registration
});

module.exports = router;
