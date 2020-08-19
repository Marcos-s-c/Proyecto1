var express = require("express");
var router = express.Router();

var Usuario = require("../modelo/modelo_usuario");

router.put("/persona/:id", function (req, res) {
  Usuario.updateOne(
    { _id: req.params.id },
    { $set: req.body },

    function (error, info) {
      if (error) {
        res.json({
          resultado: false,
          msg: "No se pudo modificar el usuario",
        });
      } else {
        res.json({
          resultado: true,
          info: info,
        });
      }
    }
  );
});

router.put("/asociar/:cedula", function (req, res) {
  Usuario.updateOne(
    { userID: req.params.cedula },
    { $set: req.body },

    function (error, info) {
      if (error) {
        res.json({
          resultado: false,
          msg: "No se pudo modificar el usuario",
        });
      } else {
        res.json({
          resultado: true,
          info: info,
        });
      }
    }
  );
});

module.exports = router;
