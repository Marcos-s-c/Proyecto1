function logOut(url){
    fetch(url)
    .then(function(response){
        console.log(response)
    })
}