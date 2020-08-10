var express = require("express");
var router = express.Router();

const Usuario = require('../modelo/modelo_usuario');

router.post('/personas/login', async function (req, res) {

    const correo = req.body.correo
    const password = req.body.password
    try {
        const user = await Usuario.findByCredentials(correo, password)
        const token = await user.generarTokenDeAutenticacion()
        return res.send({ user, token })
    } catch (e) {
        return res.status(400).send("Credenciales incorrectos")

    }
})


module.exports = router;