async function logInValidation() {
  var data = {
    rol: document.getElementById("userType-list").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  console.log(data);

  //Este switch es para identificar el tipo de usario que intenta ingresar y asi saber en que coleccion buscar

  var route = () => {
    switch (data.rol) {
      case "parqueo":
        return "parqueos/login";
      case "cliente":
        return "personas/login";
      case "empresa":
        return "empresas/login";
      default:
        return "none";
    }
  };

  try {
    const response = await fetch(route(), {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 400) {
      alert("credenciales incorrectos");
    } else {
      const jsonResp = await response.json();
      console.log(jsonResp);
      localStorage.setItem("token", jsonResp.token);
      document.cookie = "token=" + jsonResp.token;

      if (jsonResp.empresa.rol === "cliente") {
        console.log("cliente");
        window.location.href =
          "./components/Buscar_Parqueo/buscar_parqueo.html";
      } else if (jsonResp.empresa.rol === "empresa") {
        console.log("empresa");
        window.location.href =
          "./components/Listar_Empleados_de_Empresa/empleados.html";
      } else if (jsonResp.empresa.rol === "parqueo") {
        console.log("parqueo");
        window.location.href =
          "./components/Listar_Espacios_Parqueo/listarEspacios.html";
      }
    }
  } catch (error) {
    console.log(error);
  }
}
