var express = require("express");
var router = express.Router();
const authentication = require('../middleware/authentication')

const User = require('../modelo/modelo_usuario');

router.post('/personas/logout', authentication, async function (req, res) {

    try {

        usuario = req.usuario
        usuario.tokens = req.usuario.tokens.filter((token) => { /// filter filtra los tokens que no cumplen la condicion y los elimina
            if (token.token !== req.token) {   //Unicamente persisten los tokens que son distintos al que se va a desloguear.
                return true;
            }
        })

       // console.log("Despues de filter -->" , req.usuario.tokens)
        await req.usuario.save()         /// ACTUALIZAMOS EL USUARIO EN LA BASE DE DATOS.
        res.header.status = 200

    } catch (error) {
       // res.status(500).send()
        res.header.status = 401

    }

})




module.exports = router;