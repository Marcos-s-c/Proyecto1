var express = require("express");
var router = express.Router();
const Parqueo = require('../modelo/modelo_parqueo')

router.post("/parqueos/buscar/cliente", async function (req, res) {

    try {
        const provincia= req.body.provincia
        const canton= req.body.canton
        const distrito= req.body.distrito
        const parqueos = await Parqueo.find( {provincia: provincia, canton: canton, distrito: distrito } )
        res.send({parqueos})

    } catch(e) {
        res.status(500).send("Error")
    }

});


module.exports = router;