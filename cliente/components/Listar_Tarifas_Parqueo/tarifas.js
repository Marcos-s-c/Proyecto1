function edit() {
  Swal.fire({
    title: "Digite el monto por hora",
    input: "number",
    inputAttributes: {
      autocapitalize: "off",
    },
  });
}

//Función para mostrar y ocultar los inputs de agregar
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
      cancelButtonText: "dasdad, dsadasda",
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

//List rates

var ratesList = [];
window.onload = function () {
  //Este evento se dispara cuando la pantalla está cargada y ejecuta las funciones determinadas
  loadData();
};

function loadData() {
  fetch("http://localhost:4040/tarifas/listar", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (ratesArray) {
      var ratesTable = document.querySelector("#ratesTable tbody");
      ratesTable.innerHTML = "";
      ratesList = ratesArray;
      for (var i = 0; i < ratesArray.length; i++) {
        ratesTable.innerHTML += `
        <tr id="${ratesArray[i].nombreDelVehiculo}">
        <td id=""><input disabled type="text" id="name" name="fname" value="${ratesArray[i].nombreDelVehiculo}"></td>
        <td id=""><input disabled type="text" id="userID" name="fname" value="${ratesArray[i].tarifa}"></td>
        <td>
          <label class="switch">
            <input type="checkbox" checked/>
            <span class="slider round"></span>
          </label>
        </td>
        <td>
          <span id="edit-employee" >
            <i id="modify-employees" onClick="editRates('${ratesArray[i].nombreDelVehiculo}')" class="far fa-edit"></i
          ></span>
          <span id="save-employee" style= "display:none" >
          <i id="modify-employees" onClick="saveUpdatesForEmployee()" class="far fa-save" ></i
        ></span>
          <span onclick="eliminarEmpleado()">
            <i class="far fa-trash-alt desasociar"></i>
          </span>
        </td>
        </tr>`;
      }
    });
}

function showEditIcon(rateRow) {
  rateRow.getElementsByTagName("span").item(1).style.display = "block";
}
function showSaveIcon(rateRow) {
  rateRow.getElementsByTagName("span").item(2).style.display = "inline-block";
}
function hideEditIcon(rateRow) {
  rateRow.getElementsByTagName("span").item(1).style.display = "none";
}
function hideSaveIcon(rateRow) {
  rateRow.getElementsByTagName("span").item(2).style.display = "none";
}

function editRates(vehicleType) {
  var rateRow = document.getElementById(vehicleType);

  hideEditIcon(rateRow);
  showSaveIcon(rateRow);

  var theInputs = rateRow.getElementsByTagName("input");
  var theInputsArray = Array.from(theInputs);
  theInputsArray.forEach(function (input) {
    input.removeAttribute("disabled");
  });
}

function saveUpdatesForRate(vehicleType) {
  var rateRow = document.getElementById(vehicleType);

  // LLamar al fetch
  updateRateInServer(rateRow);

  showEditIcon(rateRow);
  hideSaveIcon(rateRow);
}

// slider

tabla_empleados = document.getElementById("tabla_empleados");
estadoUsuario = document.getElementById("estadoUsuario");

const ListarUsuarios = () => {
  fetch("/personas/empresa", {
    method: "POST",
    body: JSON.stringify({
      empresa: "Toyota",
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (usuarios) {
      for (const usuario of usuarios) {
        const { name, userID, email, estado } = usuario;
        console.log(usuario);
        if (usuario.estado == "activo") {
          tabla_empleados.innerHTML += `
                    <tr id="${userID}">
                    <td id=""><input disabled type="text" id="name" name="fname" value="${name}"></td>
                    <td id=""><input disabled type="text" id="userID" name="fname" value="${userID}"></td>
                    <td id=""><input disabled type="text" id="email" name="fname" value="${email}"></td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" checked id="estadoUsuario" onclick="estado(${userID})"/>
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <span id="edit-employee" ">
                        <i id="modify-employees" onClick=editEmployees(${userID}) class="far fa-edit"></i
                      ></span>
                      <span id="save-employee" style= "display:none" ">
                      <i id="modify-employees" onClick=saveUpdatesForEmployee(${userID}) class="far fa-save" ></i
                    ></span>
                      <span onclick="eliminarEmpleado(${userID})"
                        ><i class="far fa-trash-alt desasociar"></i
                      ></span>
                    </td>
                    </tr>

                    `;

          console.log(estadoUsuario);
        } else {
          tabla_empleados.innerHTML += `
                    <tr id="${userID}">
                    <td id=""><input disabled type="text" id="name" name="fname" value="${name}"></td>
                    <td id=""><input disabled type="text" id="userID" name="fname" value="${userID}"></td>
                    <td id=""><input disabled type="text" id="email" name="fname" value="${email}"></td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" unchecked id="estadoUsuario" onclick="estado(${userID})"/>
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <span id="edit-employee" ">
                        <i id="modify-employees" onClick=editEmployees(${userID}) class="far fa-edit"></i
                      ></span>
                      <span id="save-employee" style= "display:none" ">
                      <i id="modify-employees" onClick=saveUpdatesForEmployee(${userID}) class="far fa-save" ></i
                    ></span>
                      <span onclick="eliminarEmpleado(${userID})"
                        ><i class="far fa-trash-alt desasociar"></i
                      ></span>
                    </td>
                    </tr>

                    `;
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

ListarUsuarios();

const modify_Employees_btn = document.getElementById("modify-employees");

async function editarEmpleado(datos) {
  try {
    const response = await fetch("/asociar/" + cedula, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    });

    console.log("success: " + response);
  } catch (e) {
    console.log(e);
  }
}
