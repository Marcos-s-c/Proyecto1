//FUNCION QUE RETORNA UN VALOR RANDOM ENTRE 1 Y 0
/*function getSpotStatus() {
  return Math.round(Math.random(1, 0));
}
// FUNCION QUE RECORRE CADA FILA DE LA TABLA PARA ASIGNAR UN COLOR DE MANERA RANDOM
function changeColorBox() {
  const table = document.getElementById("tabla_usuarios");
  const tableRowsArray = Array.from(table.lastChild.children);
  tableRowsArray.forEach((element) => {
    let rowItems = Array.from(element.children);
    rowItems.forEach((element) => {
      let status = getSpotStatus();
      if (status == 1) {
        displayRedSpot(element);
      } else {
        displayGreenSpot(element);
      }
    });
  });
}
// FUNCIONES PARA CAMBIAR EL COLOR DE LOS SPOT IMGS
function displayRedSpot(element) {
  document.getElementById(element.firstChild.id).firstChild.src =
    "../../assets/img/red-car.png";
}
function displayGreenSpot(element) {
  document.getElementById(element.firstChild.id).firstChild.src =
    "../../assets/img/green-car.png";
}

changeColorBox();*/

async function createReservation() {
  const data = {
    code: Math.random().toString(36).slice(2),
    time: document.getElementById("time-select").value,
    spot_number: Math.floor(Math.random() * 50) + 1,
    parking_id: Math.floor(Math.random() * (999999 - 100000)) + 1,
    rate: 1000,
    customer_id: Math.floor(Math.random() * (999999 - 100000)) + 1,
    license_plate: document.getElementById("placa").value,
    reservation_status: true,
  };

  try {
    console.log(data);
    const resp = await fetch("/reservas/crear", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    console.log(resp);
    const reserva = await resp.json();
    console.log(reserva)
    localStorage.setItem("reserva", reserva);
      //window.location.href = "../ver_reserva/ver_reserva.html"
    

    //console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

function generateHoursList() {
  const timeList = new Array();
  timeList[0] = "00:00";
  for (var i = 1; i < 24; i++) {
    if(i < 10){
      timeList.push(`0${i}:00`);
    }else{
      timeList.push(`${i}:00`);
    }

  }
  const timeArray = Array.from(timeList);
  timeArray.forEach((element) => {
    const optionHtml = `<option value="${element}:00">${element}</option>`;
    document
      .getElementById("time-select")
      .insertAdjacentHTML("beforeend", optionHtml);
  });
}

generateHoursList();


