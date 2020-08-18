const jwt = require('jsonwebtoken')
const Usuario = require('../modelo/modelo_usuario');
const Parqueo = require('../modelo/modelo_parqueo');
const Empresa = require('../modelo/modelo_empresa')

// verifica en la base de datos que el usuario exista y que tenga una sesion abierta
const authentication = async (req, res, next) => {

     try {
         let rol = req.body.rol;
         let token = ""        
         if (req.cookies.token != null) {
             token = req.cookies.token
         } else {
             token = req.header('Authorization').replace('Bearer ', '')
         }

         const decoded = jwt.verify(token, "proyectonuevo")    // Devuelve el token desencriptado                                 
         const usuario = () =>{
             switch(rol){
                 case 'parqueo':
                     return Parqueo.findOne({ _id: decoded._id, 'tokens.token': token })    // si no se cumplen los dos requisitos del .findOne, no devuelve al usuario,
                 case 'cliente':                                                            // puesto que se esta buscando que el token exista en el arreglo de tokens del usuario
                     return Usuario.findOne({ _id: decoded._id, 'tokens.token': token })    // de lo contrario el usuario no ha iniciado sesion.
                 case 'empresa':
                     return Empresa.findOne({ _id: decoded._id, 'tokens.token': token })
             }
         }
                                                                                             
                                                                                             
         if (usuario == false) {                                                             
             throw new Error()
         }

         req.usuario = usuario // annadimos el usuario a request
         req.token = token     // annadimos el token a request
            next()

        }catch (error) {
            res.status(401).send({ error: 'Por favor inicie sesion' })
     }
}


module.exports = authentication