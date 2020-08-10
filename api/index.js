
var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var listarUsuarios = require("./servicios/listar_usuarios")
var guardarUsuarios = require("./servicios/guardar_usuarios")
var logIn = require("./servicios/login")
var logOut = require("./servicios/logout");
const public_dir = express.static(path.join(__dirname, "../cliente"))

//coneccion de base de datos
mongoose.connect(
  "mongodb+srv://admin:admin@proyecto-1.hlzlh.mongodb.net/Myspot?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
).then((db) => {
  console.log("Base de datos conectada")
}).catch((err) => {
  console.log(err)
});


app.use(express.json());
app.use(public_dir);

app.use(logIn);           // router
app.use(logOut);          // router
app.use(guardarUsuarios); // router
app.use(listarUsuarios);  // router

app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});
