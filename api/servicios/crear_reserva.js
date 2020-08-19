var express = require('express');
var router = express.Router();
var date = require("date-and-time");

var Reserva = require('../modelo/modelo_reserva');


router.post('/reservas/crear', async(req, res) =>{

    try{
        const currentDate = new Date();
        const reservaData = {
            code: req.code,
            creation_date : date.format(currentDate, 'DD/MM/YYYY'),
            time: date.format(req.body.time, 'hh:mm:ss'),
            spot_number: req.body.spot_number,
            parking_id: req.body.parking_id,
            rate: req.body.rate,
            customer_id: req.body.customer_id,
            license_plate: req.body.license_plate,
            reservation_status: req.body.reservation_status
        }
        const reserva = new Reserva(reservaData);
        console.log(reserva);
        await reserva.save();
        res.status(201).send();
    }
    catch(error){
        console.log(error)
        res.status(400).send("Error registrando Reserva")
    }

});


module.exports = router;