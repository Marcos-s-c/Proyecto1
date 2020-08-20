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

function editEmployees(cedula) {
  var filaEmpleado = document.getElementById(cedula);
  filaEmpleado.getElementsByTagName("span").item(1).style.display = "none";
  filaEmpleado.getElementsByTagName("span").item(2).style.display =
    "inline-block";

  var ejemplo = filaEmpleado.getElementsByTagName("input");
  var ejemploArray = Array.from(ejemplo);
  ejemploArray.forEach((element) => {
    element.removeAttribute("disabled");
  });
}

function saveUpdatesForEmployee(cedula) {
  var filaEmpleado = document.getElementById(cedula);
  console.log(filaEmpleado.getElementsByTagName("input"));

  // LLamar al fetch

  editarEmpleado(datos);

  filaEmpleado.getElementsByTagName("span").item(2).style.display = "none";
  filaEmpleado.getElementsByTagName("span").item(1).style.display = "block";
}

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

function buscarUsuario() {
  cedulaBuscadas = document.getElementById("buscadorUsuario");
  tablaUsuarios = document.getElementById("tabla_usuarios");

  cedula = {
    cedulaBuscada: cedulaBuscadas.value,
  };

  fetch("/persona/buscar", {
    method: "POST",
    body: JSON.stringify(cedula),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (usuarios) {
      for (const usuario of usuarios) {
        const { name, userID, email } = usuario;

        tablaUsuarios.innerHTML += `
                    <tr>
                    <td id="">${name}</td>
                    <td id="">${userID}</td>
                    <td id="">${email}</td>
                    <td>
                    <span onclick="asociarEmpleado(${userID})">
                    <i class="far fa-check-square asociar" ></i></span>
                    </td>
                    <td>
                   
          
                    </td>
                    </tr>
                    `;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function estado(cedula) {
  estadoUsuario = document.getElementById("estadoUsuario");
  if (estadoUsuario.checked == true) {
    datos = {
      estado: "activo",
    };
    fetch("/inactivar/" + cedula, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (usuarios) {})
      .catch(function (error) {
        console.log(error);
      });
  } else {
    datos = {
      estado: "inactivo",
    };
    fetch("/activar/" + cedula, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (usuarios) {})
      .catch(function (error) {
        console.log(error);
      });
  }
}

function asociarEmpleado(cedula) {
  datos = {
    empresa: "Toyota",
  };
  fetch("/asociar/" + cedula, {
    method: "PUT",
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

function eliminarEmpleado(cedula) {
  datos = {
    empresa: "Ninguna",
  };
  fetch("/desasociar/" + cedula, {
    method: "PUT",
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

function editarUsuario(cedula) {
  fetch("/editarUsuario", {
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
        const { name, userID, email } = usuario;

        tabla_empleados.innerHTML += `
                    <tr>
                    <td id=""><input type="text"></input></td>
                    <td id="">${userID}</td>
                    <td id="">${email}</td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" checked id="estadoUsuario" onclick="estado(${userID})"/>
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <span onclick="showAndHideEdit(event)">
                        <i class="far fa-edit"></i
                      ></span>
                      <span onclick="eliminarEmpleado(${userID})"
                        ><i class="far fa-trash-alt desasociar"></i
                      ></span>
                    </td>
                    </tr>

                    `;

        console.log(estadoUsuario);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
