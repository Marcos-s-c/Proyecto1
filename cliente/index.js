async function logInValidation() {

  var data = {
    rol: document.getElementById('userType-list').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };


  //Este switch es para identificar el tipo de usario que intenta ingresar y asi saber en que coleccion buscar

  var route = () => {

    switch (data.rol) {
      case 'parqueo':
        return 'parqueos/login';
      case 'cliente':
        return 'personas/login';
      case 'empresa':
        return 'empresas/login';
      default:
        return 'none'
    }
  }

  try {
    const response = await fetch(route(), { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
    const json = await response.json();
    console.log(json)
    localStorage.setItem("token", json.token)
    document.cookie = 'token=' + json.token

    if (json.user.rol === "cliente") {
      window.location.href = './components/Buscar_Parqueo/buscar_parqueo.html';
    } else if (json.user.rol === "empresa") {
      window.location.href = "./components/Listar_Empleados_de_Empresa/empleados.html";
    } else if (json.user.rol === "parqueo") {
      window.location.href = "./components/Listar_Espacios_Parqueo/listarEspacios.html";
    }
  }

  catch (error) {
    console.log(error)
  }
}




