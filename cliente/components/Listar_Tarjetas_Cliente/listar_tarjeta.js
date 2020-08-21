///tarjetas/listar

window.onload = function () {
    cargarDatos();
  };
  
function cargarDatos() {
    fetch("/tarjetas/listar")
        .then(function (response) {
            return response.json();
            console.log(response);
        })
        .then(function (json) {
            var tableCards = document.querySelector("#myCards tbody");
            tableCards.innerHTML = "";
            listCards = json;
            
            for (var i = 0; i < json.length; i++) {
            var row = document.createElement("tr");

            var tableData1 = document.createElement("td");
            tableData1.innerHTML = json[i].numeroTarjeta;

            var tableData2 = document.createElement("td");
            tableData2.innerHTML = json[i].nombreTarjeta;

            var tableData3 = document.createElement("td");
            tableData3.innerHTML =
                '<i onclick="eliminarTarjeta(' +
                "'" +
                json[i]._id +
                "'" +
                ')" class="far fa-trash-alt"></i>';
            

            
                
            row.appendChild(tableData1);
            row.appendChild(tableData2);
            row.appendChild(tableData3);
            tableCards.appendChild(row);
            
            }
            
        });

}

  function eliminarTarjeta(id) {
    var idTarjeta = id;
    datos = {
      id: idTarjeta,
    };
    console.log(datos);
    fetch("/eliminar/tarjetas/"+id, {
      method: "DELETE",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (usuarios) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteIcon() {
    Swal.fire({
      title: "¿Está seguro de que desea eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Eliminado", "El convenio ha sido eliminado.", "success");
      }
    });
  }
