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
  var company = document.querySelector("#company");
  var discountAdd = document.querySelector("#discountAdd");
  if (company.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La empresa no ha sido registrado",
      footer: "<a href>Why do I have this issue?</a>",
    });
  }
  company.classList.add("error");
  if (discountAdd.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El monto de descuento no ha sido registrado",
      footer: "<a href>Why do I have this issue?</a>",
    });
  }
}
