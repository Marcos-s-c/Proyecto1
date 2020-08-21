var express = require('express');
var router = express.Router();
var date = require("date-and-time");
var Reserva = require('../modelo/modelo_reserva');


router.post('/reservas/crear', async(req, res) =>{

    try{
        console.log("entro al try del router")
        const today = new Date();
        const reservationDate = date.format(today, 'DD/MM/YYYY');
        creationDate = date.parse(reservationDate + " " + req.body.time, 'DD/MM/YYYY hh:mm:ss');  

        const reservaData = {
            code: req.body.code,
            creation_date : creationDate,
            spot_number: req.body.spot_number,
            parking_id: req.body.parking_id,
            rate: req.body.rate,
            customer_id: req.body.customer_id,
            license_plate: req.body.license_plate,
            reservation_status: req.body.reservation_status
        }
        const reserva = new Reserva(reservaData);
        await reserva.save();
        console.log(reserva);
        res.status(201).send(reserva);
    }
    catch(error){
        console.log(error)
        res.status(400).send("Error registrando Reserva")
    }

});


module.exports = router;