function validar() {
  var name = document.getElementById("name");
  var apellido = document.getElementById("apellido");
  var cedula = document.getElementById("cedula");
  var fecha_nacimiento = document.getElementById("fecha-nacimiento");
  var numero_de_telefono = document.getElementById("numero");
  var email_register = document.getElementById("email-register");

  if (
    valiteBlanks([
      name,
      apellido,
      cedula,
      fecha_nacimiento,
      numero_de_telefono,
      email_register,
    ])
  ) {
    return validateEmail(email_register.value);
  } else {
    return false;
  }
}
