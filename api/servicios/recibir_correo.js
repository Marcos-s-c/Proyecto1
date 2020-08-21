var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
var fs = require('fs');
var handlebars = require('handlebars');
var path = require("path");

router.post("/recibir-correo", async function (req, res) {
  console.log("entro al router")
  const plantillas_dir = path.join(__dirname, req.body.url);              //"../../cliente/assets/plantillas-correos/verificar_cliente.html"

  const dataBuffer = fs.readFileSync(plantillas_dir);
  var template = handlebars.compile(dataBuffer.toString());

  var replacements = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  var htmlToSend = template(replacements);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myspotcr@gmail.com',
      pass: 'myspot2020'
    }
  });

  var mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: htmlToSend
  };

  transporter.sendMail(mailOptions, function (error, info) {

    if (error) {
      res.status(500).send(error);
    } else {
      res.send('Email sent: ' + info.response)
    }
  });


})

module.exports = router;