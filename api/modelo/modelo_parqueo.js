var mongoose = require('mongoose');

var modeloParqueo = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombreFantasia: String,
    direccion: String,
    ubicacion: Number,
    campos: Array,
   
});


module.exports = mongoose.model("Parqueo", modeloParqueo, "Parqueos" );