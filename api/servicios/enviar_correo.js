var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");


router.post("/enviarCorreo", async function (req, res) {

    console.log("testing")
    const nodemailer = require("nodemailer");


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


/*async function sendEmail(){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "myspotcr@gmail.com", // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"MySpot 👻" <myspotcr@gmail.com>', // sender address
    to: "myspotcr@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//main().catch(console.error);*/