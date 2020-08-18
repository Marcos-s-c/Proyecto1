var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var logIn = require("./servicios/login");
var logOut = require("./servicios/logout");
var listarUsuarios = require("./servicios/listar_usuarios");
var listarEmpresas = require("./servicios/listar_empresas");
var guardarSolicitudes = require("./servicios/guardar_solicitudes");
var listarSolicitudes = require("./servicios/listar_solicitudes");
var denegarSolicitud = require("./servicios/denegar_solicitud_de_parqueo");
var aprobarSolicitud = require("./servicios/aprobar_solicitud");
var buscarSolicitud = require("./servicios/buscar_solicitud");
var guardarUsuarios = require("./servicios/guardar_usuarios");
var guardarInfoExtraParqueos = require("./servicios/guardar_infoExtraParqueo");
var guardarEmpresa = require("./servicios/guardar_empresa");
var guardarTarjeta = require("./servicios/registrar_tarjeta");
var listarTarjetas = require("./servicios/listar_tarjetas")
var loginEmpresa = require('./servicios/login_empresa');
const enviarCorreo = require("./servicios/enviar_correo");
const cookieParser = require("cookie-parser");
const nodeCron = require("node-cron");
const authentication = require("./middleware/authentication");

const public_dir = express.static(path.join(__dirname, "../cliente"));

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

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


 app.use(logIn);
 app.use(guardarUsuarios);
 app.use(listarUsuarios);
 app.use(guardarSolicitudes);
 app.use(listarSolicitudes);
 app.use(denegarSolicitud);
 app.use(aprobarSolicitud);
 app.use(buscarSolicitud);
 app.use(logOut);
 app.use(enviarCorreo);
 app.use(guardarInfoExtraParqueos);
 app.use(guardarEmpresa);
 app.use(guardarTarjeta);
 app.use(listarTarjetas);
 app.use(loginEmpresa);
 //app.use(authentication);
 app.use(public_dir);
 //app.use(cookieParser);

 app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});



// problem aqui con el servidor
// app.use(listarTarjetas);


/*app.get('/',function(req,res){

      res.sendFile(path.join(__dirname, "../cliente/index.html"));
  
});*/



/*nodeCron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});*/
