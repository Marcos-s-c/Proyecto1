var express = require('express');
var router = express.Router();

var Tarjeta = require('../modelo/modelo_tarjeta');

router.delete("/eliminar/tarjetas/:id", async function (req, res) {
    
    await Tarjeta.findByIdAndDelete(req.params.id);
    res.json({message: 'Tarjeta Eliminada'});
});

module.exports = router;