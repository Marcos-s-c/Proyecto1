var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Empresa = require('../modelo/modelo_empresa');


router.get("/empresas/listar", function (req, res) {

    console.log(req.user)
    
    Empresa.find().exec()
    .then(function (result) {
        res.json(result);
    })
    .catch(function (err) {
        console.log(err);
    })

});

module.exports = router;