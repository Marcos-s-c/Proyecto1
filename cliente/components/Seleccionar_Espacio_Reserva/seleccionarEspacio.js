 //FUNCION QUE RETORNA UN VALOR RANDOM ENTRE 1 Y 0
  function getSpotStatus(){
    return Math.round(Math.random(1,0));;
  }
  // FUNCION QUE RECORRE CADA FILA DE LA TABLA PARA ASIGNAR UN COLOR DE MANERA RANDOM
  function changeColorBox(){
    const table = document.getElementById('spots-table');
    const tableRowsArray = Array.from(table.lastChild.children);
    tableRowsArray.forEach(element => {
      let rowItems = Array.from(element.children);
      rowItems.forEach(element => {
        let status = getSpotStatus();
        if(status == 1){
          displayRedSpot(element);
        }else{
          displayGreenSpot(element);
        }
      })
    })
  }
 // FUNCIONES PARA CAMBIAR EL COLOR DE LOS SPOT IMGS
  function displayRedSpot(element){
    document.getElementById(element.firstChild.id).firstChild.src = '../../assets/img/red-car.png';
  }
  function displayGreenSpot(element){
    document.getElementById(element.firstChild.id).firstChild.src = '../../assets/img/green-car.png';
  }

  changeColorBox();