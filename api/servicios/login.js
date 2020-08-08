var express = require("express");
var router = express.Router();

const Usuario = require('../modelo/modelo_usuario');

router.post('/personas/login', async function (req, res) {

    const correo = req.body.correo
    const password = req.body.password
    const user = await Usuario.findOne({ correo, password })

    try {
         await user.generarTokenDeAutenticacion()
        return res.send(user)
    } catch (e) {
        return res.status(400).send("Credenciales invalidos")

    }
})


module.exports = router;