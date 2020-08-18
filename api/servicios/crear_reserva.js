var express = require('express');
var router = express.Router();

var Reserva = require('../modelo/modelo_reserva');


router.post('/reservas/crear', async(req, res) =>{
    try{
        console.log("entro al try")
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