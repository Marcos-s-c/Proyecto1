var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var listarUsuarios = require("./servicios/listar_usuarios");
var logIn = require("./servicios/login");
var guardarSolicitudes = require("./servicios/guardar_solicitudes");
var listarSolicitudes = require("./servicios/listar_solicitudes");
var guardarUsuarios = require("./servicios/guardar_usuarios");
var logOut = require("./servicios/logout");
var guardarInfoExtraParqueos = require("./servicios/guardar_infoExtraParqueo");
var guardarTarjeta = require("./servicios/registrar_tarjeta")
const authentication = require("./middleware/authentication");
const public_dir = express.static(path.join(__dirname, "../cliente"));

//coneccion de base de datos
mongoose
  .connect(
    "mongodb+srv://admin:admin@proyecto-1.hlzlh.mongodb.net/Myspot?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then((db) => {
    console.log("Base de datos conectada");
  });

app.use(express.json());
app.use(public_dir);

app.use(guardarUsuarios);
app.use(listarUsuarios);
app.use(logIn);
app.use(guardarSolicitudes);
app.use(listarSolicitudes);
app.use(logOut);
app.use(guardarInfoExtraParqueos);


app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});

// const jwt = require('jsonwebtoken')

// const token = jwt.sign({ _id: user._id.toString()}, 'proyectonuevo')

//   console.log(token)
