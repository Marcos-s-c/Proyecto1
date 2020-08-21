const botonn = document.querySelector("#botonn");
const contenedor = document.querySelector("#contenedor");
const tarjeta = document.querySelector("#tarjeta"),
  btnAbrirFormulario = document.querySelector("#btn-abrir-formulario"),
  formulario = document.querySelector("#formulario-tarjeta"),
  numeroTarjeta = document.querySelector("#tarjeta .numero"),
  nombreTarjeta = document.querySelector("#tarjeta .nombre"),
  logoMarca = document.querySelector("#logo-marca"),
  firma = document.querySelector("#tarjeta .firma p"),
  mesExpiracion = document.querySelector("#tarjeta .mes"),
  yearExpiracion = document.querySelector("#tarjeta .year"),
  ccv = document.querySelector("#tarjeta .ccv");

// Para voltear la tarjeta para mostrar el frente
const mostrarFrente = () => {
  if (tarjeta.classList.contains("active")) {
    tarjeta.classList.remove("active");
  }
};

//Girar la tarjeta
tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

// Desplegar el formulario
btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toggle("active");
  formulario.classList.toggle("active");
});

//select del mes generado dinamicamente
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

// Select del año generado dinamicamente
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

// input numero de tarjeta

formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
    //Para eliminar espacios en blancos
    .replace(/\s/g, "")
    //para eliminar las letras
    .replace(/\D/g, "")
    //Espacios de 4 numeros
    .replace(/([0-9]{4})/g, "$1 ")
    //Para eliminar el ultimo espaciado
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput == "") {
    numeroTarjeta.textContent = "#### #### #### ####";
    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "mastercard.png";
    logoMarca.appendChild(imagen);
  }

  //Para voltear la tarjeta
  mostrarFrente();
});

//Input nombre de la tarjeta
formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == "") {
    nombreTarjeta.textContent = "Jhon Doe";
  }

  mostrarFrente();
});

// Select mes -change-> Ejecutar codigo cada vez que hay cambio
formulario.selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

// Select año -change-> Ejecutar codigo cada vez que hay cambio - slice-> muestra 2 digitos
formulario.selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

// Para ccv
formulario.inputCCV.addEventListener("keyup", () => {
  if (!tarjeta.classList.contains("active")) {
    tarjeta.classList.toggle("active");
  }

  formulario.inputCCV.value = formulario.inputCCV.value
    //Para eliminar espacios en blancos
    .replace(/\s/g, "")
    //para eliminar las letras
    .replace(/\D/g, "");

  ccv.textContent = formulario.inputCCV.value;
});

function sendForm() {
  console.log("antes");
  var numeroTarjeta = formulario.inputNumero.value;
  var nombreTarjeta = formulario.inputNombre.value;
  var mesSeleccionado = formulario.selectMes.value;
  var yearSeleccionado = formulario.selectYear.value;
  var firmaCCV = formulario.inputCCV.value;

  var data = {
    numeroTarjeta: numeroTarjeta,
    nombreTarjeta: nombreTarjeta,
    mesSeleccionado: mesSeleccionado,
    yearSeleccionado: yearSeleccionado,
    firmaCCV: firmaCCV,
  };

  console.log(data);

  var request = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("/tarjetas/guardar", request)
    .then(function (data) {
      console.log(data);
      window.location.href =
        "http://localhost:4040/components/Listar_Tarjetas_Cliente/listar_tarjeta.html";
    })
    .catch(function (error) {
      console.log(error);
    });
}
