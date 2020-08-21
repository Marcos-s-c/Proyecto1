
function displayParkings(name){
  
    const html = 
        `<div class="items-content-wraper">        
        <div class="item-content">
        <div class="image">
        <img src="../../assets/img/parqueos_usuarios/parqueo2.jpg">
        </div>
        <div class="details">
        <h3 class="heading" id=${name}>Nombre del parqueo</h3>
        <div class="star-rating">                    
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div class="3">
            <sup>&#8353</sup>
            <span>1000/hora</span>
        </div>
        </div>
        <button type="button" class="book-parking"><a href="../Seleccionar_Espacio_Reserva/seleccionarEspacio.html">Reservar</a></button>
    </div>
    </div>`

    console.log(parqueos)
    const resultsBox= document.getElementById('resultsList-box').insertAdjacentHTML('beforeend', html);
}