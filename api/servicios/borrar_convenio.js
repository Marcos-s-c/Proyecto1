var express = require('express');
var router = express.Router();

var Convenio = require('../modelo/modelo_convenio');

router.delete("/eliminar/convenio/:id", async function (req, res) {
    
    await Convenio.findByIdAndDelete(req.params.id);
    res.json({message: 'Tarjeta Eliminada'});
});

module.exports = router;