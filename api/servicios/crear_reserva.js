var express = require('express');
var router = express.Router();
var date = require("date-and-time");

var Reserva = require('../modelo/modelo_reserva');


router.post('/reservas/crear', async(req, res) =>{

    try{
        const reservaData = {
            code: req.code,
            creation_date : date.format('DD/MM/YYYY'),
        }
        const reserva = new Reserva(req.body);
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