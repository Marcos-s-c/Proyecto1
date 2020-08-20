var date = require("date-and-time");
var fetch = require("node-fetch");
var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var logIn = require("./servicios/login");
var loginEmpresa = require("./servicios/login_empresa");
var loginParqueo = require("./servicios/login_parqueo");
var loginAdmin = require("./servicios/login_admin");
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
var guardarTarjeta = require("./servicios/guardar_tarjeta");
var listarTarjetas = require("./servicios/listar_tarjetas");
var editarUsuario = require("./servicios/editar_usuario");
var listarParqueosAdministrador = require("./servicios/listar_parqueos_administrador");
var buscarParqueosCliente = require("./servicios/buscar_parqueos_cliente");
var registrarPago = require("./servicios/registrar_pago");
var crearReserva = require("./servicios/crear_reserva");
var listarReservas = require("./servicios/listar_reservas");
var guardarConvenio = require("./servicios/guardar_convenios");
const enviarCorreo = require("./servicios/enviar_correo");
const cookieParser = require("cookie-parser");
const nodeCron = require("node-cron");
const authentication = require("./middleware/authentication");
var listar_tarifas = require("./servicios/listar_tarifas");
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
app.use(loginParqueo);
app.use(loginAdmin);
app.use(loginEmpresa);
app.use(logOut);
app.use(guardarUsuarios);
app.use(listarUsuarios);
app.use(guardarSolicitudes);
app.use(listarSolicitudes);
app.use(denegarSolicitud);
app.use(aprobarSolicitud);
app.use(buscarSolicitud);
app.use(enviarCorreo);
app.use(guardarInfoExtraParqueos);
app.use(guardarEmpresa);
app.use(listarEmpresas);
app.use(guardarTarjeta);
app.use(listarTarjetas);
app.use(crearReserva);
app.use(listarReservas);
app.use(listarParqueosAdministrador);
app.use(registrarPago);
app.use(editarUsuario);
<<<<<<< HEAD
app.use(guardarConvenio);
=======
app.use(listar_tarifas);
>>>>>>> 1f213a1a1cceec9b5e92299a04aebb52e3da2514
//app.use(authentication);
app.use(public_dir);
//app.use(cookieParser);

app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});

/*nodeCron.schedule('* * * * *', async () => {
  console.log('running a task every minute');
  const resp = await fetch('http://localhost:4040/reservas/listar')
  const reservas = await resp.json();
});*/
