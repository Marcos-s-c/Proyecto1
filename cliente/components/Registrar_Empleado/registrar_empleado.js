//Validar correo
function changePassword() {
  var validateResult = validateEmptySpaces() && validateEmailEquality();
  if (validateResult == true) {
    window.location =
      "/cliente/components/cambio_exitoso_password/cambio_exitoso_password.html";
  }
}

function validar() {
  var nombre = document.getElementById("nombre");
  var cedula = document.getElementById("cedula");
  var fecha_nacimiento = document.getElementById("fecha-nacimiento");
  var telefono = document.getElementById("telefono");
  var correo = document.getElementById("email-register");
  var puestoLaboral = document.getElementById("puesto-empleado");
  var fechaContratacion = document.getElementById("fecha-de-contratacion");

  if (
    valiteBlanks([
      nombre,
      cedula,
      fecha_nacimiento,
      telefono,
      correo,
      puestoLaboral,
      fechaContratacion,
    ])
  ) {
    if (validateEmail(correo.value)) {
      console.log("enviando datos");
      valores = {
        nombre : nombre.value,
        cedula: cedula.value,
        fecha_nacimiento: fecha_nacimiento.value,
        telefono: telefono.value,
        correo: correo.value,
        puestoLaboral: puestoLaboral.value,
        fechaContratacion: fechaContratacion.value,
      };
      fetch("/empleado", {
        method: "POST",
        body: JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
      swal({
        title: "info extra guarda con exito",
        icon: "success",
        button: "Aceptar",
      });
      console.log("info extra creada");
    } else {
      return false;
    }
  } else {
    return false;
  }
}
