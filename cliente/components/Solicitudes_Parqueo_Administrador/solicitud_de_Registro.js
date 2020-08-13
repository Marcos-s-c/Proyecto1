window.onload = function () {
  //Este evento se dispara cuando la pantalla está cargada y ejecuta las funciones determinadas
  cargarDatos();
};

function cargarDatos() {
  fetch("http://localhost:4040/solicitud_parqueo/listar")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      for (var i = 0; i < json.length; i++) {
        requestsTable = document.querySelectorAll("#requestsTable");
      }
    });
}
