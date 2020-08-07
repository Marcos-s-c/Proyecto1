var express = require('express');
var router = express.Router();

var Usuario = require('../modelo/modelo_usuario');

router.delete("/persona/:id", async function (req, res) {
    
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario Eliminado'});

});

module.exports = router;