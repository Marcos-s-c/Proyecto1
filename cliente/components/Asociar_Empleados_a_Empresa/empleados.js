tabla_empleados = document.getElementById("tabla_empleados");

const ListarUsuarios = () => {
  fetch("/personas", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (usuarios) {
      for (const usuario of usuarios) {
        const { name, userID, email} = usuario;

        tabla_empleados.innerHTML += `
                    <tr>
                    <td id="">${name}</td>
                    <td id="">${userID}</td>
                    <td id="">${email}</td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <span onclick="showAndHideEdit(event)">
                        <i class="far fa-edit"></i
                      ></span>
                      <span onclick="deleteIcon()"
                        ><i class="far fa-trash-alt"></i
                      ></span>
                    </td>
                    </tr>
                    `;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

ListarUsuarios();

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
