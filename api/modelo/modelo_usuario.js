var mongoose = require('mongoose');

var modeloUsuario = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombre: String,
    apellido: String,
    cedula: Number,
    correo: String,
    nivel: String,
    nombreParqueo: String,
    ubicacionParqueo: String,
    password:String
});


module.exports = mongoose.model("Usuario", modeloUsuario, "Usuarios" );