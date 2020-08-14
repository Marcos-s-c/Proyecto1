function logInValidation() {
  var data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("/personas/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      console.log(response);
      console.log(1);
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      console.log(2);
      window.localStorage.setItem("token", JSON.stringify(response.token));
      window.localStorage.setItem("level", response.user.level);
      //sendReq();
      window.location.href =
        "components/Registrar_Empleado/registrar_empleado.html";
    })
    .catch(function (e) {
      console.log(e);
    });
}

function sendReq() {
  let url =
    "components/Registrar_Informacion_Adicional_Dueño/informacion_adicional.html";
  let header = new Headers();
  let token = JSON.parse(localStorage.getItem("token"));
  header.append("Authenticaction", `Bearer ${token}`);

  let req = new Request(url, {
    method: "GET",
    Mmode: "cors",
    headers: header,
  });
  fetch(req)
    .then((resp) => resp.json())

    .catch((err) => {
      console.log(err.message);
    });
}

/*
request.get('http://localhost:4040/Buscar_Parqueo/buscar_parqueo.html', {
  'auth': {
    'bearer': localStorage.getItem("token")
  }
});
//or
request.get('http://some.server.com/').auth('username', 'password', false);
// or
request.get('http://some.server.com/', {
  'auth': {
    'user': 'username',
    'pass': 'password',
    'sendImmediately': false
  }
});
// or
request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// or
*/

/*
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
*/
