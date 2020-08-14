//Validar email
function changePassword() {
  var validateResult = validateEmptySpaces() && validateEmailEquality();
  if (validateResult == true) {
    window.location =
      "/cliente/components/cambio_exitoso_password/cambio_exitoso_password.html";
  }
}

function validar() {
  var name = document.getElementById("name");
  var userID = document.getElementById("userID");
  var birthDate = document.getElementById("fecha-nacimiento");
  var phoneNumber = document.getElementById("phoneNumber");
  var email = document.getElementById("email");
  var puestoLaboral = document.getElementById("puesto-empleado");
  var fechaContratacion = document.getElementById("fechaContratacion");
  console.log("prueba");
  if (
    valiteBlanks([
      name,
      userID,
      birthDate,
      phoneNumber,
      email,
      puestoLaboral,
      fechaContratacion,
    ])
  ) {
    console.log("prueba2");
    if (validateEmail(email.value)) {
      console.log("enviando datos");
      valores = {
        name: name.value,
        userID: userID.value,
        birthDate: birthDate.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        puestoLaboral: puestoLaboral.value,
        fechaContratacion: fechaContratacion.value,
        level: "empleado",
      };
      console.log(JSON.stringify(valores));

      fetch("/personas", {
        method: "POST",
        body: JSON.stringify(valores),
        headers: { "Content-Type": "application/json" },
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log("info usuario creado");
      fetch("/empleados", {
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
      console.log("info empleado creada");
    } else {
      return false;
    }
  } else {
    return false;
  }
}
