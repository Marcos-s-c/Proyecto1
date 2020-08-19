var express = require("express");
var router = express.Router();

const Empresa = require('../modelo/modelo_empresa');

router.post('/empresas/login', async function (req, res) {

    console.log("entro al login")   
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await Empresa.findByCredentials(email, password)
        const token = await user.generarTokenDeAutenticacion()
        res.send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send("Credenciales incorrectos")
    }
})

module.exports = router;