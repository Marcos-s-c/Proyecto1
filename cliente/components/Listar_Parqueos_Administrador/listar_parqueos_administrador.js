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
      parkingTable.innerHTML = "";
      parkingList = json;
      for (var i = 0; i < json.length; i++) {
        var row = document.createElement("tr");

        var tableData1 = document.createElement("td");
        tableData1.innerHTML = json[i].nombre;

        var tableData2 = document.createElement("td");
        tableData2.innerHTML = json[i].nombreDelDueño;

        var tableData3 = document.createElement("td");
        var labelToggle = document.createElement("label");
        var inputToggle = document.createElement("input");
        var spanToggle = document.createElement("span");
        tableData3.appendChild(labelToggle);
        labelToggle.appendChild(inputToggle);
        inputToggle.type = "checkbox";
        if (json[i].estado == "Activo") {
          inputToggle.checked = true;
        }
        labelToggle.appendChild(spanToggle);
        labelToggle.classList.add("switch");
        spanToggle.classList.add("slider");
        spanToggle.classList.add("round");

        var tableData4 = document.createElement("td");
        var editIcon = document.createElement("i");
        var deleteIcon = document.createElement("i");
        tableData4.appendChild(editIcon);
        tableData4.appendChild(deleteIcon);
        editIcon.classList.add("far");

        editIcon.classList.add("fa-edit");

        deleteIcon.classList.add("far");
        deleteIcon.classList.add("fa-trash-alt");
        row.appendChild(tableData1);
        row.appendChild(tableData2);
        row.appendChild(tableData3);
        row.appendChild(tableData4);
        parkingTable.appendChild(row);
      }
    });
}
