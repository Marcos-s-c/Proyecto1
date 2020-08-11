var express = require("express");
var router = express.Router();

const User = require('../modelo/modelo_usuario');

router.post('/personas/login', async function (req, res) {

    const email = req.body.email
    const password = req.body.password
    console.log(email, password)
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generarTokenDeAutenticacion()
        return res.send({ user, token })
    } catch (error) {
        return res.status(400).send("Credenciales incorrectos")

    }
})

module.exports = router;