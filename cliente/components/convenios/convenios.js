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
  var validateResult = validateCompany() && validateDiscount();
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

function validateDiscount() {
  var discountAdd = document.querySelector("#discountAdd");
  var discountRegex = /^([0-9])*$/;
  var firstError = "";
  var result = false;

  discountAdd.classList.remove("error");
  if (discountAdd.value == "" || !discountRegex.test(discountAdd.value)) {
    if (firstError == "") {
      firstError = "El monto de descuento no ha sido registrado";
    }
    discountAdd.classList.add("error");
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
