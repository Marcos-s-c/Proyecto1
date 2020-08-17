var mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { text } = require("express");



var express = require("express");
var router = express.Router();

const User = require('../modelo/modelo_parqueo');

router.post('/parqueos/login', async function (req, res) {
   
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generarTokenDeAutenticacion()
        return res.send({ user, token })
    } catch (error) {
        return res.status(400).send("Credenciales incorrectos")

    }
})

module.exports = router;