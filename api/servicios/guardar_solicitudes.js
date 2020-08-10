var express = require("express");
var router = express.Router();

var Solicitud = require("../modelo/modelo_solicitud_parqueo");
const { request } = require("express");
router.post("/solicitud_parqueo/guardar", function (req, res) {
  console.log(req.body);
});

module.exports = router;
