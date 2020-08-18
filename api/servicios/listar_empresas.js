var express = require('express');
var router = express.Router();

var Empresa = require('../modelo/modelo_empresa');

router.get("/personas", function (req, res) {

    console.log(req.user)
    
    Empresa.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

module.exports = router;