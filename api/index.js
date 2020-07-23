var express = require('express');
var path = require('path');
var app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, "../cliente")));

app.listen(2020,function () {
    console.log("Servidor corriendo en el puerto:2020")
});