var requestsList = [];
var parqueo = {};

window.onload = function () {
  //Este evento se dispara cuando la pantalla está cargada y ejecuta las funciones determinadas
  cargarDatos();
};

function cargarDatos() {
  fetch("http://localhost:4040/solicitud_parqueo/listar", { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var requestsTable = document.querySelector("#requestsTable tbody");
      requestsTable.innerHTML = "";
      requestsList = json;
      for (var i = 0; i < json.length; i++) {
        var row = document.createElement("tr");

        var tableData1 = document.createElement("td");
        tableData1.innerHTML = json[i].state;

        var tableData2 = document.createElement("td");
        tableData2.innerHTML = json[i].parkingName;

        var tableData3 = document.createElement("td");
        tableData3.innerHTML =
          '<i onclick="approve(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="far fa-check-circle"></i>';
        tableData3.innerHTML +=
          '<i onclick="deny(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="far fa-times-circle"></i>';

        var tableData4 = document.createElement("td");
        tableData4.innerHTML =
          '<i onclick="toSeeInformation(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="fas fa-info-circle"></i>';

        row.appendChild(tableData1);
        row.appendChild(tableData2);
        row.appendChild(tableData3);
        row.appendChild(tableData4);
        requestsTable.appendChild(row);
      }
    });
}

/*Función para conocer el estado del atributo donde está la solicitud seleccionada por 
medio del identificador único "correo".
*/
function getRequestState(email) {
  var stateRequestSelected;
  for (var i = 0; i < requestsList.length; i++) {
    if (requestsList[i].email == email) {
      stateRequestSelected = requestsList[i].state;
      break;
    }
  }
  return stateRequestSelected;
}

function deny(emailRequest) {
  var stateRequestSelected = getRequestState(emailRequest);
  if (stateRequestSelected != "Pendiente") {
    Swal.fire({
      icon: "error",
      title: "La solicitud debe de estar en estado 'Pendiente'!",
    });
  } else {
    var value = {
      email: emailRequest,
    };

    var request = {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/solicitud_parqueo/denegar", request)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "La solicitud ha sido denegada",
          showConfirmButton: false,
          timer: 1500,
        });
        cargarDatos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function approve(email) {
  var stateRequestSelected = getRequestState(email);
  if (stateRequestSelected != "Pendiente") {
    Swal.fire({
      icon: "error",
      title: "La solicitud debe de estar en estado 'Pendiente'!",
    });
  } else {
    var value = {
      email: email,
    };

    var request = {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/solicitud_parqueo/aprobar", request)
      .then(function (result) {
        parqueo = result.json();
        return parqueo;
      })
      .then(function (result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "La solicitud ha sido aprobada",
          showConfirmButton: false,
          timer: 1500,
        });
        cargarDatos();

        result.name = result.nombre;

        sendEmail(
          result,
          "Confirmación de cuenta",
          "../../cliente/assets/plantillas-correos/verificar_cliente.html"
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function searchWithinTheTable() {
  var criteriaDropdown = document.querySelector("#criteria");
  var criteriaSelected =
    criteriaDropdown.options[criteriaDropdown.selectedIndex].value;
  var writtenDownValue = document.querySelector("#searchValue").value;
  var requestsList = document.querySelector("#requestsTable tbody");
  requestsList.innerHTML = "";

  fetch(
    "http://localhost:4040/solicitud_parqueo/buscar/?searchCriteria=" +
      criteriaSelected +
      "&searchValue=" +
      writtenDownValue,
    { method: "GET" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      for (var i = 0; i < json.length; i++) {
        var row = document.createElement("tr");

        var tableData1 = document.createElement("td");
        tableData1.innerHTML = json[i].state;

        var tableData2 = document.createElement("td");
        tableData2.innerHTML = json[i].parkingName;

        var tableData3 = document.createElement("td");
        tableData3.innerHTML =
          '<i onclick="approve(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="far fa-check-circle"></i>';
        tableData3.innerHTML +=
          '<i onclick="deny(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="far fa-times-circle"></i>';

        var tableData4 = document.createElement("td");
        tableData4.innerHTML =
          '<i onclick="toSeeInformation(' +
          "'" +
          json[i].email +
          "'" +
          ')" class="fas fa-info-circle"></i>';

        row.appendChild(tableData1);
        row.appendChild(tableData2);
        row.appendChild(tableData3);
        row.appendChild(tableData4);
        requestsList.appendChild(row);
      }
    });
}
