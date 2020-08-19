var express = require("express");
var router = express.Router();

const Admin = require("../modelo/modelo_admin");

router.post("/admin/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await Admin.findByCredentials(email, password);
    //const token = await admin.generarTokenDeAutenticacion()
    return res.send({ user });
  } catch (error) {
    return res.status(400).send("Credenciales incorrectos");
  }
});

module.exports = router;
