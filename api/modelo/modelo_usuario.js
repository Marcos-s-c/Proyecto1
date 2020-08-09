var mongoose = require('mongoose');
const validator = require('validator')
const jwt = require('jsonwebtoken')

const esquemaUsuario = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    cedula: {
        type: Number,
        required: true,
        unique: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (validator.isEmail(value) == false) {
                throw new Error ("El correo ingresado no es valido")
            }            
        }
    },
    nivel: String,
    nombreParqueo: String,
    ubicacionParqueo: String,
    password:{
        type: String,
        required: true,
        minLength: 4,
        validate(value) {
            if (value.includes("123")) {
                throw new Error('El password no puede contener 123')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});


esquemaUsuario.methods.generarTokenDeAutenticacion = async function () {
    const usuario = this
    const token = jwt.sign({ _id: usuario._id.toString()}, 'proyectonuevo')

    console.log("generando token ", token)

    usuario.tokens = usuario.tokens.concat({token})

    await usuario.save()
    return token
}


const Usuario = mongoose.model("Usuario", esquemaUsuario, "Usuarios" )


module.exports = Usuario;