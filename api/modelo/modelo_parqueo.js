var mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { text } = require("express");

var parkingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (validator.isEmail(value) == false) {
        throw new Error("El email ingresado no es valido");
      }
    },
  },
  nombre: {
    type: String,
    required: true,
  },
  nombreDelDueño: {
    type: String,
    required: true,
  },
  fechaDeNacimiento: {
    type: Date,
    required: true,
  },
  cedula: {
    type: Number,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  canton: {
    type: String,
    required: true,
  },
  distrito: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: false,
  },
  centroComercial: {
    type: String,
    required: false,
  },
  latitud: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
  cantidadCampos: {
    type: Number,
    required: true,
  },
  tarifas: {
    type: Array,
    required: true,
  },
  convenios: Array,
  fechaDeInicio: Date,
  horario: Array,
  tipoVehiculos: Array,
  password: {
    required: true,
    type: String,
  },
  rol: {
    type: String,
  },
  //arreglo de tokens para cada sesion que mantenga abierta
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

parkingSchema.methods.generarTokenDeAutenticacion = async function () {
  const usuario = this;
  const token = jwt.sign(
    { id: usuario._id.toString(), email: usuario.email },
    "proyectonuevo"
  );

  usuario.tokens = usuario.tokens.concat({ token });

  await usuario.save();
  return token;
};

//esta funcion encripta la clave del usuario antes de ser guardada en la base de datos
parkingSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//esta función busca el usuario segun el email y password recibido por parametros
parkingSchema.statics.findByCredentials = async (email, password) => {
  const usuario = await Usuario.findOne({ email: email });
  const esValido = await bcrypt.compare(password, usuario.password);

  if (esValido == false) {
    throw new Error("Crendeciales incorrectos, por favor intente de nuevo.");
  }

  return usuario;
};

const Parqueo = mongoose.model("Parqueo", parkingSchema, "Parqueos");

module.exports = Parqueo;
