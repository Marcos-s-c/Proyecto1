var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Pago = require("../modelo/modelo_pago");

router.post('pagos/registrar', async function(req, res){
    const pago = new Pago(req.body)
    console.log(pago);
    try{
        await pago.save();
        res.status(200).send(pago);
    }
    catch(error){
        console.log(error);
        res.status(400).send()
    }
})

module.exports = router;
