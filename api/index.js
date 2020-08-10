var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
<<<<<<< HEAD
var listarUsuarios = require("./servicios/listar_usuarios");
var guardarUsuarios = require("./servicios/guardar_usuarios");
var logIn = require("./servicios/login");
var guardarSolicitudes = require("./servicios/guardar_solicitudes");
=======
var listarUsuarios = require("./servicios/listar_usuarios")
var guardarUsuarios = require("./servicios/guardar_usuarios")
var logIn = require("./servicios/login")
var logOut = require("./servicios/logout");
const authentication = require("./middleware/authentication");
const public_dir = express.static(path.join(__dirname, "../cliente"))
>>>>>>> 565a070a6744e5447be4f0473495896a08b32fd5

//coneccion de base de datos
mongoose
  .connect(
    "mongodb+srv://admin:admin@proyecto-1.hlzlh.mongodb.net/Myspot?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then((db) => {
    console.log("Base de datos conectada");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "../cliente")));
=======
app.use(public_dir);
>>>>>>> 565a070a6744e5447be4f0473495896a08b32fd5

app.use(guardarUsuarios);
app.use(listarUsuarios);
app.use(logIn);
<<<<<<< HEAD
app.use(guardarSolicitudes);
=======
app.use(logOut);

>>>>>>> 565a070a6744e5447be4f0473495896a08b32fd5

app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});
<<<<<<< HEAD

// const jwt = require('jsonwebtoken')

// const token = jwt.sign({ _id: user._id.toString()}, 'proyectonuevo')

//   console.log(token)
=======
>>>>>>> 565a070a6744e5447be4f0473495896a08b32fd5
