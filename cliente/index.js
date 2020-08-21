async function logInValidation() {
  var data = {
    rol: document.getElementById("userType-list").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  //Este switch es para identificar el tipo de usario que intenta ingresar y asi saber en que coleccion buscar

  var route = () => {
    switch (data.rol) {
      case "parqueo":
        return "parqueos/login";
      case "cliente":
        return "personas/login";
      case "empresa":
        return "empresas/login";
      case "admin":
        return "admin/login";
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
      console.log(response);

      const jsonResp = await response.json();
      localStorage.setItem("token", jsonResp.token);
      localStorage.setItem("user", jsonResp.user);
      document.cookie = "token=" + jsonResp.token;
      document.cookie = "user=" + jsonResp.user;

      console.log(jsonResp);

      if (jsonResp.user.rol === "cliente") {
        console.log("cliente");
        window.location.href =
          "./components/Buscar_Parqueo/buscar_parqueo.html";
      } else if (jsonResp.user.rol === "empresa") {
        console.log("empresa");
        window.location.href =
          "./components/Listar_Empleados_de_Empresa/empleados.html";
      } else if (jsonResp.user.rol === "parqueo") {
        console.log("parqueo");
        window.location.href =
          "./components/Perfil_Parqueo/modificarPerfil.html";
      } else if (jsonResp.user.rol === "admin") {
        window.location.href =
          "./components/Perfl_Administrador/ver_perfil_administrador.html";
      }
    }
  } catch (error) {
    console.log(error);
  }
}
