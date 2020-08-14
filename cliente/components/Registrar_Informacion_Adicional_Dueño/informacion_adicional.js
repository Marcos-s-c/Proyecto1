function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
const GuardarInfoExtraParqueo = () => {
  var username = document.getElementById("username");
  var birthday = document.getElementById("birthdate");
  var fotosParqueo = document.getElementById("fotosparqueo");
  var bicicletas = document.getElementById("bicicletas");
  var motocicletas = document.getElementById("motocicletas");
  var automoviles = document.getElementById("automoviles");
  var pesado = document.getElementById("pesado");

  if (valiteBlanks([username])) {
    console.log("enviando datos");
    var token = window.localStorage.getItem("token");
    var email = parseJwt(token).email;
    console.log(email);
    valores = {
      bicicletas: bicicletas.value,
      motocicletas: motocicletas.value,
      automoviles: automoviles.value,
      pesado: pesado.value,
      email: email,
    };
    console.log(JSON.stringify(valores));
    fetch("/infoExtraParqueo", {
      method: "POST",
      body: JSON.stringify(valores),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (data) {
        return data.json(data);
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
};
