var mongoose = require('mongoose');


const payment_schema  = mongoose.Schema({
    payment_id : {
        type: String,
        required: true,
        unique: true
    },
    payment_date:{
        type: Date,
        required: true
    },
    card_number:{
        type: Number,
        required: true
    },
    card_type: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    parking_id: {
        type: String,
        required: true
    },
    reservation_id:{
        type: String,
        required: true
    }
})


const Pago = mongoose.model("Pago", payment_schema, "Pagos");

module.exports = Pago;

