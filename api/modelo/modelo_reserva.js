var mongoose = require('mongoose');


const reservation_schema  = mongoose.Schema({
    
    code: {
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        required: true,
    },
    parking_id: {
        type: String,
        required: true
    },
    rate: {                 //tarifa
        type: Number
    },
    customer_id: {
        type: String,
        required: true
    },
    license_plate: {     //placa del carro
        type: String,
        required: true
    },
    reservation_status: {
        type: Boolean
    }
})

const Reserva = mongoose.model("Reserva", reservation_schema, "Reservas");

module.exports = Reserva;
