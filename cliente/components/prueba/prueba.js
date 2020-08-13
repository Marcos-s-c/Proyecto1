function enviarcorreo(){
    fetch('/enviar')
    .then(function(response){
        console.log(response)
    })
}