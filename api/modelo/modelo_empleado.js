var mongoose = require('mongoose');

var modeloEmpleado = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombre: String,
    cedula: Number,
    fecha_nacimiento: Date,
    telefono: Number,
    correo: String,
    puestoLaboral: String,
    fechaContratacion: Date,
});


module.exports = mongoose.model("Empleado", modeloEmpleados, "Empleados" );