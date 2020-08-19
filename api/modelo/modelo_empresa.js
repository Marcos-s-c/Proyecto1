var mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var companieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userID: {
    type: Number,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
  },
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
  password: {
    required: true,
    type: String,
  },
  rol: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

companieSchema.methods.generarTokenDeAutenticacion = async function () {
  const usuario = this;
  const token = jwt.sign(
    { id: usuario._id.toString(), email: usuario.email, name: usuario.name },
    "proyectonuevo"
  );

  usuario.tokens = usuario.tokens.concat({ token });

  await usuario.save();
  return token;
};

//esta funcion encripta la clave del usuario antes de ser guardada en la base de datos
companieSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//esta función busca el usuario segun el email y password recibido por parametros
companieSchema.statics.findByCredentials = async (email, password) => {
  const usuario = await Empresa.findOne({ email: email });
  console.log(usuario);
  const esValido = await bcrypt.compare(password, usuario.password);
  console.log(esValido);
  if (esValido == false) {
    throw new Error();
  }
  return usuario;
};

const Empresa = mongoose.model("Empresa", companieSchema, "Empresas");

module.exports = Empresa;
