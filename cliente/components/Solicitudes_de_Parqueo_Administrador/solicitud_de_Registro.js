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
      console.log(json);
      for (var i = 0; i < json.length; i++) {
        var requestsTable = document.querySelector("#requestsTable tbody");
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

function deny(correo) {
  var value = {
    email: correo,
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
      console.log(result);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });

  /*Swal.fire({
    title: "¿Está seguro de que desea denegar la solicitud?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Denegar",
  }).then((result) => {
    if (result.value) {
      Swal.fire("Denegada", "La solicitud ha sido denegada.", "success");
    }
  });*/
}

function approve() {
  /*Swal.fire({
    title: "¿Deseas aceptar la solicitud?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.value) {
      Swal.fire("La solicitud ha sido aceptada.", "success");
    }
  });*/
}
