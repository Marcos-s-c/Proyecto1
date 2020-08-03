//Validar correo
function changePassword() {
  var validateResult = validateEmptySpaces() && validateEmailEquality();
  if (validateResult == true) {
    window.location =
      "/cliente/components/cambio_exitoso_password/cambio_exitoso_password.html";
  }
}


function validar(){
    var name = document.getElementById("name");
    var cedula = document.getElementById("cedula");
    var fecha_nacimiento = document.getElementById("fecha-nacimiento");
    var numero  = document.getElementById("numero");
    var email_register = document.getElementById("email-register");
    var puestoEmpleado = document.getElementById("puesto-empleado");
    var fechaContratacion = document.getElementById("fecha-de-contratacion");


    if (
        valiteBlanks([
          name,
          cedula,
          fecha_nacimiento,
          numero,
          email_register,
          puestoEmpleado,
          fechaContratacion
        ])
      ) {
       if(validateEmail(email_register.value)){
        return window.location.href = '/cliente/components/ver_empleados/ver_empleado.html';
       } else {
           return false
       }
      } else {
        return false;
      }
    }
    
