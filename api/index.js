var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var logIn = require("./servicios/login");
var logOut = require("./servicios/logout");
var listarUsuarios = require("./servicios/listar_usuarios");
var guardarSolicitudes = require("./servicios/guardar_solicitudes");
var guardarUsuarios = require("./servicios/guardar_usuarios");
const authentication = require("./middleware/authentication");
const enviarCorreo = require("./servicios/enviar_correo");
const public_dir = express.static(path.join(__dirname, "../cliente"));

const nodeCron = require('node-cron')
 
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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
app.use(logOut);
app.use(enviarCorreo)


app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});

/*nodeCron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});*/