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

router.post('/modificar-empresa', function(req, res) {
    let body = req.body;
    Empresa.updateOne({_id: body._id},{
        $set: {
            nombre: body.nombre,
            estado: body.estado
        }
    },
    function(error, info) {
        if(error) {
            res.json({
                resultado: false,
                msg: 'no se pudo modificar la Empresa',
                err
            });
        } else {
            res.json({
                resultado: true,
                info: info
            })
        }

    }
    )
});







module.exports = router;