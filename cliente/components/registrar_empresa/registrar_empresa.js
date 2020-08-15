function validar() {
  var name = document.getElementById("name");
  var cedula = document.getElementById("cedula");
  var fecha_nacimiento = document.getElementById("fecha-nacimiento");
  var numero = document.getElementById("numero");
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
      fechaContratacion,
    ])
  ) {
    if (validateEmail(email.value)) {
      console.log("enviando datos");
      var data = {
        name: document.getElementById("name").value,
        cedula: document.getElementById("cedula").value,
        fecha_nacimiento: document.getElementById("fecha-nacimiento").value,
        numero: document.getElementById("numero").value,
        email_register: document.getElementById("email-register").value,
        puestoEmpleado: document.getElementById("puesto-empleado").value,
        fechaContratacion: document.getElementById("fecha-de-contratacion")
          .value,
      };
      fetch("/empresas", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return false;
    }
  } else {
    return false;
  }
}
