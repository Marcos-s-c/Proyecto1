var mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
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
    type: String,
    required: false,
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

// el token de autenticacion se utiliza para iniciar y cerrar sesion
adminSchema.methods.generarTokenDeAutenticacion = async function () {
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
adminSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//esta función busca el usuario segun el email y password recibido por parametros

//
adminSchema.statics.findByCredentials = async (email, password) => {
  const usuario = await Admin.findOne({ email: email });
  //const esValido = await bcrypt.compare(password, usuario.password);

  /*if (esValido == false) {
    throw new Error("Crendeciales incorrectos, por favor intente de nuevo.");
  }*/

  return usuario;
};

const Admin = mongoose.model("Administrador", adminSchema, "Administrador");

module.exports = Admin;
