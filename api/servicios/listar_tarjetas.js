var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tarjeta = require('../modelo/modelo_tarjeta');

router.get("/tarjetas/listar", function (req, res) {

    console.log(req.user)
    
    Tarjeta.find().exec()
    .then(function (result) {
        res.json(result);
    })
    .catch(function (err) {
        console.log(err);
    })

});

module.exports = router;