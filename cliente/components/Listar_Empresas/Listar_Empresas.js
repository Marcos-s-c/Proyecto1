window.onload = function () {
  cargarDatos();
};

function cargarDatos() {
  fetch("http://localhost:4040/empresas/listar")
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
          tableData1.innerHTML = json[i].name;
  
          var tableData2 = document.createElement("td");
          tableData2.innerHTML = json[i].userID;

          var tableData3 = document.createElement("td");
          tableData3.innerHTML = json[i].email;
  
          var tableData4 = document.createElement("td");
          tableData4.innerHTML =
            '<label class="switch">'+
            '<input type="checkbox" checked />'+
            '<span class="slider round"></span>' +
            '</label>';

          var tableData5 = document.createElement("td");
          tableData5.innerHTML =
            '<i onclick="deleteIcon(' +
            "'" +
            json[i].email +
            "'" +
            ')" class="far fa-trash-alt"></i>';
          
  
          
            
          row.appendChild(tableData1);
          row.appendChild(tableData2);
          row.appendChild(tableData3);
          row.appendChild(tableData4);
          row.appendChild(tableData5);
          requestsTable.appendChild(row);
          
        }
        
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
      Swal.fire("Eliminado", "La empresa ha sido eliminado.", "success");
    }
  });
}




/*//Función para mostrar y ocultar los inputs de agregar
function showAndHideAdd() {
    var add = document.getElementById("add");
    var edit = document.getElementById("edit");
    edit.style.display = "none";
    if (add.offsetWidth > 0 && add.offsetHeight > 0) {
      add.style.display = "none";
    } else {
      add.style.display = "block";
    }
  }
  
  //Función para mostrar y ocultar el espacios de editar
  
  function showAndHideEdit() {
    var add = document.getElementById("add");
    var edit = document.getElementById("edit");
    add.style.display = "none";
    if (edit.offsetWidth > 0 && edit.offsetHeight > 0) {
      edit.style.display = "none";
    } else {
      edit.style.display = "block";
    }
  }
  
  //Validar espacios agregar
  function validateAddSpaces() {
    var validateResult = validateCompany() && validateDiscount("#discountAdd");
    if (validateResult == true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El convenio se ha agregado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    }
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




fetch("http://localhost:4040/empresas/listar")
      .then(function (response) {
          return response.json();
      })
      .then(function (json) {
          console.log(json);
          for (i = 0; i < json.length; i++) {
              var row =
                  "<tbody><tr><td>" +
                  json[i].name +
                  "</td><td>" +
                  json[i].userID +
                  "</td><td>" +
                  json[i].email +
                  
                  "</td></tr></tbody>";
              tabla.insertAdjacentHTML("beforeend", row);
          }
      });



  
*/


