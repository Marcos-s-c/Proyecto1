function validar() {
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");

  if (valiteBlanks([loginEmail, loginPassword])) {


    // fetch POST va aqui comprobar
    let datos = {
      correo: loginEmail,
      password: loginPassword,
    };
    // enviar esos datos al servidor para ver si existe
    // nos devuelve un tipo de usuario
    // guardamos el tipo de usuario en el localhost

    var usuario =  localStorage.getItem(tipo);

    if (usuario == "cliente") {
      window.location.href = "components/buscar_parqueobuscarParqueo.html";
    } else if (usuario == "empresa") {
      window.location.href =
        "/components/asociar_empleados_convenios/asociar_empleados_convenios.html";
    } else if (usuario == "dueño") {
      window.location.href = "/components/modificarPerfil/modificarPerfil.html";
    } else if (usuario == "administrador") {
      window.location.href =
        "/components/ver_perfil_administrador/ver_perfil_administrador.html";
    } else {
      alert("usuario no existe");
    }
  } else {
    return false;
  }
}
