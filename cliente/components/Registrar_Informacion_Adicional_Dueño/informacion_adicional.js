

const GuardarEspacio = () => {
  var username = document.getElementById("username");
  var birthday = document.getElementById("birthdate");
  var fotosParqueo = document.getElementById("fotosparqueo");
  var bicicletas = document.getElementById("bicicletas");
  var motocicletas = document.getElementById("motocicletas");
  var automoviles = document.getElementById("automoviles");
  var pesado = document.getElementById("pesado");



  if (valiteBlanks([username])) {
    console.log("enviando datos");
    valores = {
      bicicletas: bicicletas.value,
      motocicletas: motocicletas.value,
      automoviles: automoviles.value,
      pesado: pesado.value,  
    };
    fetch("/guardar/espacio", {
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
      title: "Usuario guardado con exito",
      icon: "success",
      button: "Aceptar",
    });
    console.log('usuario creado')
  } else {
    return false;
  }
}



 
  




