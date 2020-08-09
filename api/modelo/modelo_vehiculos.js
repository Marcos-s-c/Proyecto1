var mongoose = require('mongoose');

var modeloVehiculo = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    marca: String,
    modelo: String,
    year: Number,
    placa: String,
});


module.exports = mongoose.model("Vehiculo", modeloVehiculo, "Vehiculos" );