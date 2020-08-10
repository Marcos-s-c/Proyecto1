const jwt = require('jsonwebtoken')
const Usuario = require('../modelo/modelo_usuario')

// verifica en la base de datos que el usuario exista y que tenga una sesion abierta
const authentication = async (req, res, next) => {
    try {

        const token = req.header('Authorization').replace('Bearer ', '') // "Bearer myToken" --> "myToken"
        const decoded = jwt.verify(token, "proyectonuevo") // Devuelve el token desencriptado
        const usuario = await Usuario.findOne({ _id: decoded._id, 'tokens.token': token })   // si no se cumplen los dos requisitos del .findOne, no devuelve al usuario, 
                                                                                            // puesto que se esta buscando que el token exista en el arreglo de tokens del usuario
        if (usuario == false) {                                                             // de lo contrario el usuario no ha iniciado sesion.
            throw new Error()
        }

        req.usuario = usuario // annadimos el usuario a request
        req.token = token     // annadimos el token a request
        next()

    } catch (error) {
        res.status(401).send({ error: 'Por favor inicie sesion' })
    }
}


module.exports = authentication