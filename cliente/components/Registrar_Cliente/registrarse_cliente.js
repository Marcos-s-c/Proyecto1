function validar() {
  var name = document.getElementById("name");
  var cedula = document.getElementById("cedula");
  var fecha_nacimiento = document.getElementById("fecha-nacimiento");
  var numero = document.getElementById("numero");
  var email_register = document.getElementById("email-register");
  if (
    valiteBlanks([
      name,
      cedula,
      fecha_nacimiento,
      numero,
      email_register
    ]))
  {
      return window.location.href = "/cliente/components/iniciar_sesion/inicio_sesion.html";
    } else {
      return false;
    }
}
