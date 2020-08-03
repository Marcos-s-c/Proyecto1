var link = document.createElement('link');
link.rel = 'import';
link.href = 'parkingListItem.html';
//link.setAttribute('async', ''); // make it async!
/*link.onload = function(e) {...};
link.onerror = function(e) {...};*/
//link.setAttribute(async);

function getAllParkings(){
    const resultsListItems = document.getElementById('resultsList-items');
    
    fetch('http://localhost:5000/buscarParqueo/listar')
    .then(function(response) {
        console.log(response);
        return response.json();
        }
    )
    .then(function(json) {
        let myArray = Array.from(json);
        myArray.forEach(element =>{
            link.innerHTML.replace('#parkingName') = element.nombreUsuario;
            resultsListItems.appendChild(link); 
        })
    })   
}