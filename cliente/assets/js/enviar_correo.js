function sendEmail(){
    var data = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html
    }
}