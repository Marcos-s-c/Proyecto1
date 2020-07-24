contenido_table = document.getElementById("contenido_tabla");

const GuardarUsuario = () => {
  var aprobado = false;

  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  cedula = document.getElementById("cedula");
  correo = document.getElementById("correo");
  nivel = document.getElementById("nivel");

  nombre.classList.remove("datoVacioBorde");
  apellido.classList.remove("datoVacioBorde");
  cedula.classList.remove("datoVacioBorde");
  correo.classList.remove("datoVacioBorde");
  nivel.classList.remove("datoVacioBorde");

  if (nombre.value == "") {
    nombre.classList.add("datoVacioBorde");
    nombre.placeholder = "Escriba el nombre";
  } else if (apellido.value == "") {
    apellido.classList.add("datoVacioBorde");
    apellido.placeholder = "Escriba el apellido";
  } else if (cedula.value == "") {
    cedula.classList.add("datoVacioBorde");
    cedula.placeholder = "Escriba la cedula";
  } else if (correo.value == "") {
    correo.classList.add("datoVacioBorde");
    correo.placeholder = "Escriba el correo";
  } else if (nivel.value == "") {
    nivel.classList.add("datoVacioBorde");
    nivel.placeholder = "Escriba el nivel";
  } else {
    aprobado = true;
  }

  if (aprobado) {
    console.log("enviando datos");
    valores = {
      nombre: nombre.value,
      apellido: apellido.value,
      cedula: cedula.value,
      correo: correo.value,
      nivel: nivel.value,
    };

    fetch("/guardar/persona", {
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

    swal("Good job!", "You clicked the button!", "success");
  }
};
