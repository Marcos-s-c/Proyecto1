var mongoose = require('mongoose');

var modeloEmpresa = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombre: String,
    cedula: Number,
    birthday: Date,
    telefono: Number,
    correo: String,
    puestoLaboral: String,
    fechaContratacion: Date,
});


module.exports = mongoose.model("Empresa", modeloEmpresa, "Empresas" );