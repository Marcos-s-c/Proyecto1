const jwt = require('jsonwebtoken')
const Usuario = require('../modelo/modelo_usuario')


const authentication = async (req, res, next) => {
    try {

        const token = req.header('Authorization').replace('Bearer ', '') // "Bearer myToken" --> "myToken"
        const decoded = jwt.verify(token, "proyectonuevo") // Devuelve el token desencriptado
        const usuario = await Usuario.findOne({ _id: decoded._id, 'tokens.token': token })   // si no se cumplen los dos requisitos del .findOne, no devuelve al usuario, 
                                                                                            // puesto que se esta buscando que el token exista en el arreglo de tokens del usuario
        if (!usuario) {                                                                     // de lo contrario el usuario no ha iniciado sesion.
            throw new Error()

        }

        req.usuario = usuario // annadimos el usuario a la propiedad request
        req.token = token     // annadimos el token a la propiedad request
        next()

    } catch (error) {
        res.status(401).send({ error: 'Por favor inicie sesion' })
    }
}


module.exports = authentication