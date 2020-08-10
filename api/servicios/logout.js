var express = require("express");
var router = express.Router();
const authentication = require('../middleware/authentication')

const Usuario = require('../modelo/modelo_usuario');

router.post('/personas/logout', authentication, async function (req, res) {

    try {

     //   console.log("Antes de filter -->" , req.usuario.tokens)

        req.usuario.tokens = req.usuario.tokens.filter((token) => { /// filter filtra los tokens que no cumplen la condicion y los elimina
            if (token.token !== req.token) {   //Unicamente persisten los tokens que son distintos al que se va a desloguear.
                return true;
            }
        })

       // console.log("Despues de filter -->" , req.usuario.tokens)
        await req.usuario.save()         /// ACTUALIZAMOS EL USUARIO EN LA BASE DE DATOS.
        

        res.send()

    } catch (error) {
       // res.status(500).send()
        res.status(500).send()

    }

})




module.exports = router;