var express = require('express');
var router = express.Router();

var Tarjeta = require('../modelo/modelo_tarjeta');

router.get("/tarjetas", function (req, res) {

    console.log(req.user)
    
    Tarjeta.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

}); 

module.exports = router;