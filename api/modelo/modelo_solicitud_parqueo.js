"use strict";
let mongoose = require("mongoose");

var solicitudSchema = new mongoose.Schema({
  ownersName : {
    type: String,
    required: true
  },
  usersId : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  dateOfBirth : {
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
  address : {
    type: String,
    required: true
  },
  shoppingCent : {
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
  state : {
    type: String
  },
  password : {
    type: String
  }
    
});

module.exports = mongoose.model(
  "Solicitud",
  solicitudSchema,
  "Solicitudes"
);


