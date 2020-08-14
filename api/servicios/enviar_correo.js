var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
//var fs = require('fs');

router.post("/enviarCorreo", async function (req, res) {

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
      html: req.body.html
    };

    console.log(mailOptions)
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).send(error);
      } else {
        res.send('Email sent: ' + info.response)
      }
    }); 


})

module.exports = router;


    /*async function getHtmlCode(url){
      try{
        var data =  await fs.readFile(url , function(err, data){
          if(err){
            throw err;
          }
          console.log(data);
          return data;
        });
      }
      catch{
        console.log(err + "")
      }
    }*/

