 
var mongoose = require('mongoose');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
                throw new Error("El correo ingresado no es valido")
            }
        }
    },
    nivel: String,
    nombreParqueo: String,
    ubicacionParqueo: String,
    password: {
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
    const token = jwt.sign({ _id: usuario._id.toString() }, 'proyectonuevo')

    usuario.tokens = usuario.tokens.concat({ token })

    await usuario.save()
    return token
}


esquemaUsuario.pre('save', async function (next) {

    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})



/* Cree  una funcion que reciba el email y el password del usuario.
*Valide si el password es el correcto, en el caso de que sea correcto devuelva el objeto usuario.
*/

esquemaUsuario.statics.findByCredentials = async (email, password) => {

    const usuario = await Usuario.findOne({ correo: email })
    const esValido = await bcrypt.compare(password, usuario.password);

    if (esValido == false) {
        throw new Error("Crendeciales incorrectos, por favor intente de nuevo.")
    }

    return usuario;
}


const Usuario = mongoose.model("Usuario", esquemaUsuario, "Usuarios")

module.exports = Usuario;