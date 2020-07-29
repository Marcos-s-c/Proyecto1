var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");

//conecciond de base de datos
mongoose
  .connect(
    "mongodb+srv://admin:admin@proyecto-1.hlzlh.mongodb.net/Myspot?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => console.log("Base de datos conectada"))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../cliente/landing_page")));
app.use(express.static('../cliente/assets/img'));

//ejecutamos el servicios
app.use("/guardar", require("./servicio/guardar_usuarios"));


app.listen(4040, function () {
  console.log("Servidor corriendo en el puerto:4040");
});
