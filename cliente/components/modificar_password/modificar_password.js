//Validar correo
function changePassword() {
  var validateResult = validateEmptySpaces() && validateEmailEquality();
  if (validateResult == true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su contraseña ha sido modificada correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

//Validar espacios vacíos
function validateEmptySpaces() {
  var inputs = document.querySelectorAll("input[type='text']");
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var primerError = "";
  var resultado = false;

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error");
    if (inputs[i].value == "" || !regexCorreo.test(inputs[i].value)) {
      if (primerError == "") {
        primerError = "El correo no ha sido registrado";
      }
      inputs[i].classList.add("error");
    }
  }
  if (primerError != "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: primerError,
    });
  } else {
    resultado = true;
  }

  return resultado;
}

//Validar igualdad de correos
function validateEmailEquality() {
  var inputs = document.querySelectorAll("input[type='text']");
  var resultado = false;

  if (inputs[0].value != inputs[1].value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Los correos no son iguales",
      footer: "<a href>Why do I have this issue?</a>",
    });
    inputs[0].classList.add("error");
    inputs[1].classList.add("error");
  } else {
    resultado = true;
  }
  return resultado;
}
