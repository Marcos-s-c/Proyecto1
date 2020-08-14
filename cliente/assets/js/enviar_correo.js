
function sendEmail(userEmail, subj, htmlDir){

    var body = {
        from: "myspotcr@gmail.com",
        to: userEmail,
        subject: subj,
        html : htmlDir
    }
    fetch("/enviarCorreo" ,{
        method: 'POST',
        body: JSON.stringify(body), 
        headers:{'Content-Type': 'application/json'}
    })
    .then(function(req, res){
        console.log(req);
        console.log(res);
    })
}

