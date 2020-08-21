formulario = document.querySelector("#registerForm");

function validateAddSpaces() {
  var validateResult = validateCompany() && validateDiscount("#discountAdd");
  if (validateResult == true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El convenio se ha agregado correctamente"
    });
  }
  
  var nombreConvenio = document.getElementById("company").value;
  var porcentajeConvenio = document.getElementById("discountAdd").value;

  console.log(nombreConvenio + " " + porcentajeConvenio);

  var data = {
    nombreConvenio: nombreConvenio,
    porcentajeConvenio: porcentajeConvenio,
  };

  console.log(data);

  var request = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  };

  fetch("/guardar/convenios", request)
    .then(function (data) {
      console.log(data);
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}

//Validar editar general
function validateEditInput() {
  var validateResult = validateDiscount("#discountEdit");
  if (validateResult == true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El convenio se ha editado correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

//Validar input nombre de la compañía
function validateCompany() {
  var company = document.querySelector("#company");
  var firstError = "";
  var result = false;
  company.classList.remove("error");
  if (company.value == "") {
    if (firstError == "") {
      firstError = "La empresa no ha sido registrado";
    }
    company.classList.add("error");
  }
  if (firstError != "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: firstError,
      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    result = true;
  }
  return result;
}

//Validar input porcentaje de descuento
function validateDiscount(elementId) {
  var elementDiscount = document.querySelector(elementId);
  var discountRegex = /^([0-9])*$/;
  var firstError = "";
  var result = false;

  elementDiscount.classList.remove("error");
  if (
    elementDiscount.value == "" ||
    !discountRegex.test(elementDiscount.value)
  ) {
    if (firstError == "") {
      firstError = "El monto de descuento no ha sido registrado";
    }
    elementDiscount.classList.add("error");
  }
  if (firstError != "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: firstError,
      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    result = true;
  }
  return result;
}

//Función Eliminar

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

window.onload = function () {
  cargarDatos();
};

function cargarDatos() {
  fetch("/convenios/listar")
      .then(function (response) {
          return response.json();
          console.log(response);
      })
      .then(function (json) {
          var conventionsTable = document.querySelector("#conventionsTable tbody");
          conventionsTable.innerHTML = "";
          conventionsList = json;
          for (var i = 0; i < json.length; i++) {
          var row = document.createElement("tr");

          var tableData1 = document.createElement("td");
          tableData1.innerHTML = json[i].nombreConvenio;
  
          var tableData2 = document.createElement("td");
          tableData2.innerHTML = json[i].porcentajeConvenio + "%";
  
          var tableData3 = document.createElement("td");
          tableData3.innerHTML =
            '<label class="switch">'+
            '<input type="checkbox" checked />'+
            '<span class="slider round"></span>' +
            '</label>';

          var tableData4 = document.createElement("td");
          tableData4.innerHTML =
            '<i onclick="eliminarConvenio(' +
            "'" +
            json[i]._id +
            "'" +
            ')" class="far fa-trash-alt"></i>';
          
  
          
            
          row.appendChild(tableData1);
          row.appendChild(tableData2);
          row.appendChild(tableData3);
          row.appendChild(tableData4);
          conventionsTable.appendChild(row);
          
          }
          
      });

}


function eliminarConvenio(id) {
  var idConvenio = id;
  datos = {
    id: idConvenio,
  };
  console.log(datos);
  fetch("/eliminar/convenio/"+id, {
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











//Función para mostrar y ocultar los inputs de agregar
/*function showAndHideAdd() {
  var add = document.getElementById("add");
  var edit = document.getElementById("edit");
  edit.style.display = "none";
  if (add.offsetWidth > 0 && add.offsetHeight > 0) {
    add.style.display = "none";
  } else {
    add.style.display = "block";
  }
}
*/
//Función para mostrar y ocultar el espacios de editar

/*function showAndHideEdit() {
  var add = document.getElementById("add");
  var edit = document.getElementById("edit");
  add.style.display = "none";
  if (edit.offsetWidth > 0 && edit.offsetHeight > 0) {
    edit.style.display = "none";
  } else {
    edit.style.display = "block";
  }
}
*/
//Validar espacios agregar