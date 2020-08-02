//Función agregar
function add() {
  showAndHideAdd();
  validateEmptySpaces();
}

function edit() {
  showAndHideEdit();
  validateEmptySpaces();
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

//Validar espacios
function validateEmptySpaces() {
  var email = document.querySelector("#email");
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.value == "" || !regexCorreo.test(email.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El correo no ha sido registrado",
      footer: "<a href>Why do I have this issue?</a>",
    });
  }
  email.classList.add("error");
}
