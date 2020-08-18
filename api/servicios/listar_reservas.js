var express = require('express');
var router = express.Router();

var Reserva = require('../modelo/modelo_reserva');


router.get('/reservas/listar', async(req, res)=>{

    try{
        const reservas = await Reserva.find().exec()
        res.status(200).send(reservas);
    }
    catch(error){
        console.log(error)
        res.status(400).send("Error encontrando Reserva")
    }
 

})


module.exports = router;