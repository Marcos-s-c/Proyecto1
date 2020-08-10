var express = require("express");
var router = express.Router();

var Solicitud = require("../modelo/modelo_solicitud_parqueo");
router.post("/solicitud_parqueo/guardar", function (req, res) {
  console.log(Funcionó);
});
