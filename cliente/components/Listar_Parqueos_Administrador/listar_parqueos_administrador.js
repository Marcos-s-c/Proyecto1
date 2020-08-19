var parkingList = [];
window.onload = function () {
  //Este evento se dispara cuando la pantalla está cargada y ejecuta las funciones determinadas
  loadData();
};

function loadData() {
  fetch("http://localhost:4040/parqueos/listar/administrador", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var parkingTable = document.querySelector("#parkingTable tbody");
      requestsTable.innerHTML = "";
      requestsList = json;
      for (var i = 0; i < json.length; i++) {
        var row = document.createElement("tr");
      }
    });
}
