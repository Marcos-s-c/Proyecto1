
function logInValidation() {

  var data = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  fetch('/personas/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    response.json()
      .then(function (response) {

        console.log(response.user)

        localStorage.setItem("token", response.token)
        document.cookie = 'token=' + response.token

        if (response.user.rol === "cliente") {
          console.log("entro al if")
          window.location.href = './components/Buscar_Parqueo/buscar_parqueo.html';
        }else if(response.user.rol === "empresa"){
          window.location.href = "./components/Listar_Empleados_de_Empresa/empleados.html";
        }else if(response.user.rol === "parqueo"){
          window.location.href = "./components/Listar_Espacios_Parqueo/listarEspacios.html";
        }
      })
      .catch(function (e) {
        console.log(e)
      })

  })
}
/*********************************************** */



