"use strict";
let mongoose = require("mongoose");

var solicitudSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  userId : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  birthDate : {
    type: Date,
    required: true
  },
  parkingName : {
    type: String,
    required: true
  }, 
  provincia :{
    type: String,
    required: true
  }, 
  canton : {
    type: String,
    required: true
  },
  distrito : {
    type: String,
    required: true
  },
  fullAddress : {
    type: String,
    required: true
  },
  mall : {
    type: String,
  },
  latitud : {
    type: Number,
    required: true
  },
  longitud : {
    type: Number,
    required: true
  },
  status : {
    type: String
  }
});

module.exports = mongoose.model(
  "Solicitud",
  solicitudSchema,
  "Solicitudes"
);
