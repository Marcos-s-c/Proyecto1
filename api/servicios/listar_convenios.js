var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Convenio = require('../modelo/modelo_convenio');

router.get("/convenios/listar", function (req, res) {

    console.log(req.user)
    
    Convenio.find().exec()
    .then(function (result) {
        res.json(result);
    })
    .catch(function (err) {
        console.log(err);
    })

});

module.exports = router;