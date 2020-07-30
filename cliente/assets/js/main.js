function valiteBlanks(elements) {
  console.log("entra");
  for (var key in elements) {
    var element = elements[key];
    if (element.value === "") {
      Swal.fire("Hay espacios en blanco sin completar");
      return false;
    }
  }
  return true;
}

// validar email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  } else {
    Swal.fire("Formato del correo no es correcto");
    return false;
  }
}
