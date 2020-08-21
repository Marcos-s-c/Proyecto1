async function notifyAdmin(user, subj, url_html){

    var body = {
        from: "myspotcr@gmail.com",
        to: "myspotcr@gmail.com" ,
        email : user.email,
        subject: subj,
        name: user.ownersName,
        password: user.password,
        url: url_html
    }
    try{
        const response = await fetch("/recibir-correo" ,{
            method: 'POST',
            body: JSON.stringify(body), 
            headers:{'Content-Type': 'application/json'}
        })
    }
    catch(error){
        console.log(error + "" )
    }

}
